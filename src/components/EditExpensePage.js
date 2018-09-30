import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {editExpense,removeExpense} from '../actions/expenses';

const EditExpensePage=(props)=>{
    console.log(props);
return(
    <div>
        <button onClick={()=>{return  props.history.push('/'); }}>Click here to Select from HomePage.</button>
        <ExpenseForm expenses={props.expenses}
        submit={(expense)=>{
            props.dispatch(editExpense(props.expenses.id,expense));
            props.history.push('/');
        }}/>
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expenses.id }));
            props.history.push('/');
          }}>Remove</button>
    </div>);
};

  
const mapStateToProps=(state,props)=>{
   return  {
        expenses:state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);
