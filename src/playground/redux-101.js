import {createStore} from 'redux';

//Action generator function---generate action at one place.

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type:'RESET'
   
});

const setCount=({count}={})=>({
    type:'SET',
    count
});

const appReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        
        return{
            count:state.count+action.incrementBy
        }
       case 'DECREMENT':
        
        return{
            count:state.count-action.decrementBy
        }
        case 'SET':
        return{
            count:action.count
        }
         case'RESET':return{
             count:0
         }
         default:return state
    }
};

const store=createStore(appReducer());

//subscribe()---a function is passed in it which  get called
//everytime a store changes.
// const unsubscribe=
store.subscribe(()=>{
    console.log(store.getState())
});

//dispatch()---changes store's state
//We can pass as many property we want in object.
store.dispatch(incrementCount({incrementBy:5}));

//unsubscribe();//Now it will log one time.3 down will not log.

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));
// console.log(store.getState());