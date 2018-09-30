import uuid from "uuid";

export const addExpense=({
    
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

export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

export const editExpense=(id,update)=>({
type:'EDIT_EXPENSE',
id,
update
});
