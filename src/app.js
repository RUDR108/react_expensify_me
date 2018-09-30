//install ->export ->use(for using 3rd-party modules.)

//import validator from 'validator';
// console.log(validator.isEmail('gmail@a.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import  {setTextFilter} from './actions/filters';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore();
store.dispatch(addExpense({description:'water bill',amount:500}));
store.dispatch(addExpense({description:'gas bill',createdAt:1000,amount:300}));
store.dispatch(addExpense({description:'rent',amount:1095,createdAt:300}));

// store.dispatch(setTextFilter('bill'));


    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);

 const jsx=(
     <Provider store={store}>
    <AppRouter/>
     </Provider>
 );
 
ReactDOM.render(jsx,document.getElementById('app'));