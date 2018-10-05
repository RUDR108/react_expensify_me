import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value',()=>{
    const state=filterReducer(undefined,{type:'@@init'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});

test('should setup sortBy amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual(
    'amount')
});

test('should setup sortBy date',()=>{
    const defstate={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state=filterReducer(defstate,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date')
});

test('should setup sortBy date',()=>{
 
    const state=filterReducer(undefined,{type:'SET_END_DATE'});
    expect(state.sortBy).toEqual('date')
});


test('should text filter',()=>{
    const text='this';
    const action={
        type:'SET_TEXT_FILTER',
        text
    }
    const state=filterReducer(undefined,action);
    expect(state.text).toEqual('this');
});

test('should startDate filter',()=>{
    const startDate=moment(0);
    const action={
        type:'SET_START_DATE',
        startDate
    }
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(moment(0));
});

test('should endDate filter',()=>{
    const endDate=moment(0);
    const action={
        type:'SET_END_DATE',
        endDate
    }
    const state=filterReducer(undefined,action);
    expect(state.endDate).toEqual(moment(0));
});



