import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const expenses=[{
    id:'123',
    description:'a description',
    note:'a note',
    amount:23,
    createdAt:moment(0)
},{
    id:'124',
    description:'a1 description',
    note:'a1 note',
    amount:34,
    createdAt:moment(0).add(1,'day')
},{
    id:'125',
    description:'a2 description',
    note:'a2 note',
    amount:21,
    createdAt:moment(0).subtract(1,'day')
}]

test('should set default state',()=>{
 
    const state=expensesReducer(undefined,{type:'@@init'});
expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'123'
    }
    const state=expensesReducer(expenses,action);
expect(state).toEqual([expenses[1],expenses[2]]);
});

test('should not remove expense by id if not matched.',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state=expensesReducer(expenses,action);
expect(state).toEqual(expenses);
});

test('should add expense.',()=>{
    const expense={
        id:'109',
        description:'Laptop',
        note:'',
        createdAt:20000,
        amount:29500
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expensesReducer(expenses,action);
expect(state).toEqual([...expenses,expense]);
});

test('should edit expense by id.',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'123',
        update:{
            description:'a0 description',
            note:'a0 note',
            }
    }
    const state=expensesReducer(expenses,action);
expect(state[0].description).toBe('a0 description');
});

test('should not edit expense by id if not matched.',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        update:{
            description:'a0 description',
            note:'a0 note',
            }
    }
    const state=expensesReducer(expenses,action);
expect(state).toEqual(expenses);
});