import selectExpenses from '../../selectors/expenses';
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

test('should filter by text value',()=>{
    const filters={
        text:'a1',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1]]) ;
});

test('should filter by startDate',()=>{
    const filters={
        text:'a',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[0]]) ;
});

test('should filter by endDate',()=>{
    const filters={
        text:'a',
        sortBy:'date',
        startDate:moment(0),
        endDate:moment(0).add(1,'hour')
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0]]) ;
});

test('should filter by sortByDate',()=>{
    const filters={
        text:'a',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[0],expenses[2]]) ;
});

test('should filter by sortByAmount',()=>{
    const filters={
        text:'a',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]) ;
});





