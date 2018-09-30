import React from 'react';
import uuid from 'uuid';
import {DateRangePicker} from 'react-dates';
import { connect } from 'react-redux';
import {setTextFilter,sortByDate,sortByAmount} from '../actions/filters';
import {setStartDate,setEndDate} from '../actions/filters';

class ExpenseListFilter extends React.Component{
    state={
        calendarFocused:null
    };

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }

render(){
    return(<div>
        <input type="text" 
        value={this.props.filters.sortBy} 
        onChange={(e)=>{this.props.dispatch(setTextFilter(e.target.value));}}/>
        <select onChange={(e)=>{
            if(e.target.value=='date'){
                this.props.diapatch(sortByDate());
            }else if(e.target.value=='amount'){
                this.props.dispatch(sortByAmount());
            }
        }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
        startDateId={uuid()} // PropTypes.string.isRequired,
        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
        endDateId={uuid()}// PropTypes.string.isRequired,
        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        />
    </div>);
    }
};

const mapStateToPraops=(state)=>{
    return{
        filters:state.filters
    };
}

export default connect(mapStateToPraops)(ExpenseListFilter);