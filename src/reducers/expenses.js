const expenseReducerDefaultState=[];

export default (state=expenseReducerDefaultState,action)=>{
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
 
 