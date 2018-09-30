import moment from 'moment';

export default (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const cretedAtMoment=moment(expense.createdAt);
        const startDateMatch=startDate?startDate.isSameOrBefore(cretedAtMoment,'day'):true;
        const endDateMatch=endDate?endDate.isSameOrAfter(cretedAtMoment,'Day'):true;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy=='amount'){
            return a.amount>b.amount?1:-1;
        }else if(sortBy=='date'){
            return a.createdAt>b.createdAt?-1:1;
        }
    });
};

