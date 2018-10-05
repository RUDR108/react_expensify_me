import {setTextFilter,sortByAmount,setStartDate,setEndDate,sortByDate} from '../../actions/filters';
import moment from 'moment';
  
test('this is a filter sortByAmount',()=>{
expect(sortByAmount()).toEqual({
    type:'SORT_BY_AMOUNT'
});
});

test('this is a filter sortByAmount',()=>{
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    });
    });

    
test('this is a filter setStartDate',()=>{
    expect(setStartDate(moment(0))).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
    });

    test('this is a filter setEndDate',()=>{
        expect(setEndDate(moment(0))).toEqual({
            type:'SET_END_DATE',
            endDate:moment(0)
        });
        });

        test('this is a filter setTextFilter',()=>{
            expect(setTextFilter('124')).toEqual({
                type:'SET_TEXT_FILTER',
                text:'124'
            });
            });

            test('this is a filter setTextFilter',()=>{
                expect(setTextFilter()).toEqual({
                    type:'SET_TEXT_FILTER',
                    text:''
                });
                });