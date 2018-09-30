import React from 'react';
import {createStore,combineReducers} from 'redux';
import uuid from 'uuid'; 

const addExpense=({
    
    note='note',
    description='description',
    amount='amount',
    createdAt=0
}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

const editExpense=(id,update)=>({
type:'EDIT_EXPENSE',
id,
update
});

const setTextFilter=(text='')=>({
type:'SET_TEXT_FILTER',
text
});

const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
});

const sortByDate=()=>({
    type:'SORT_BY_DATE',
});

const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState=[];

const expensesReducer=(state=expenseReducerDefaultState,action)=>{
switch(action.type){
    case 'ADD_EXPENSE':
    return[
        ...state,action.expense
    ]
    case 'REMOVE_EXPENSE':
    return  state.filter((expense)=>{
             return(expense.id!==action.id)})
    case 'EDIT_EXPENSE':
    return state.map((expense)=>{
        if(expense.id===action.id){
            return {...expense,...action.update}
        }else{
            return expense;
        }
    })
    default:
    return state;
    }
};

const filterReducerDefaultState={text:'',sortBy:'date',startDate:'',endDate:''};

const filterReducer=(state=filterReducerDefaultState,action)=>{
 switch(action.type){
     case 'SET_TEXT_FILTER':
     return {...state,text:action.text}
     case 'SORT_BY_AMOUNT':
     return {...state,sortBy:'amount'}
     case 'SORT_BY_DATE':
     return {...state,sortBy:'date'}
     case 'SET_START_DATE':
     return {...state,startDate:action.startDate}
     case 'SET_END_DATE':
     return {...state,endDate:action.endDate}
     default:
     return state;
 }
};

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=startDate!=='number'||startDate>=expense.startDate;
        const endDateMatch=endDate!=='number'||endDate>=expense.endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy=='amount'){
            return a.amount>b.amount?1:-1;
        }else if(sortBy=='date'){
            return a.createdAt>b.createdAt?-1:1;
        }
    });
};

const store=createStore(combineReducers({
    expenses:expensesReducer,
    filters:filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
  });

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rest'));

// store.dispatch(sortByDate());

store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));

// store.dispatch(setEndDate(225));


// const demoState={
//     expenses:[{
//         id:'csdlcjsd',
//         description:'sskvlvn svl',
//         note:'This was a rent',
//         amount:54500,
//         createdAt:0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount', //date or amount
//         startDate:undefined,
//         endDate:undefined
//     }
// };

