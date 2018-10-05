import React from 'react';
import { shallow } from  'enzyme';
// import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
  
const expenses=[{
    id:'123',
    description:'a description',
    note:'a note',
    amount:23,
    createdAt:0
},{
    id:'124',
    description:'a1 description',
    note:'a1 note',
    amount:34,
    createdAt:1000
},{
    id:'125',
    description:'a2 description',
    note:'a2 note',
    amount:21,
    createdAt:-1000
}]

test('should render ExpenseListItem correctly',()=>{
const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>);
expect(wrapper).toMatchSnapshot();
});