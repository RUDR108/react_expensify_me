import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
  
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description:props.expenses?props.expenses.description :'',
            note: props.expenses?props.expenses.note :'',
            amount: props.expenses?(props.expenses.amount/100).toString() :'',
            createdAt: props.expenses?moment(props.expenses.createdAt) :moment(),
            calendarFocused: false,
            error: ''
          };
    };
 

    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    };

    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
      };

    onDateChange = (createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt}));}
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit=(e)=>{
        e.preventDefault();
        
        if(!this.state.amount||!this.state.description){
            this.setState(()=>({error:'Please insert both description and amount.'}));
        }else{
            this.props.submit({
                description:this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf()
               
            });
        }
    }

render(){
    return(<div>
        {this.state.error&&<p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <input type="text" 
            placeholder="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            
            <input type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
            
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
           
            <textarea type="text"
            placeholder="note"
            value={this.state.note}
            onChange={this.onNoteChange}
            ></textarea>
            <button>Add Expense</button>
        </form>
</div>);
}};