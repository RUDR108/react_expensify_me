import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

import  moment  from 'moment';

test('should setup add expense action',()=>{
const data={
    
    note:'a note',
    description:'a description',
    amount:'a amount',
    createdAt:moment(0)
}
 
expect(addExpense(data)).toEqual({
    type:'ADD_EXPENSE',
    expense:{ note:'a note',
    description:'a description',
    amount:'a amount',
    createdAt:moment(0),
    id:expect.any(String)}
   
});
});


test('should setup add expense action',()=>{
    // const data={
        
    //     note:'a note',
    //     description:'a description',
    //     amount:'a amount',
    //     createdAt:moment(0)
    // }
     
    expect(addExpense()).toEqual({
        type:'ADD_EXPENSE',
        expense:{ note:'note',
        description:'description',
        amount:'amount',
        createdAt:0,
        id:expect.any(String)}
       
    });
    });

    test('should setup remove expense action',()=>{
        // const data={
            
        //     note:'a note',
        //     description:'a description',
        //     amount:'a amount',
        //     createdAt:moment(0)
        // }
         
        expect(removeExpense({id:'123'})).toEqual({
            type:'REMOVE_EXPENSE',
            id:'123'
           
        });
        });

        test('should setup edit expense action',()=>{
            const data={
                
                note:'a note',
                description:'a description',
                amount:'a amount',
                createdAt:moment(0)
            }
             
            expect(editExpense('123',data)).toEqual({
                type:'EDIT_EXPENSE',
                id:'123',
                update:{
                    
                    note:'a note',
                    description:'a description',
                    amount:'a amount',
                    createdAt:moment(0)
                }
            });
            });