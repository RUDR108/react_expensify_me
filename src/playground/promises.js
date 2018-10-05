const promise = new Promise(()=>{
    resolve("do this");
});

promise.then(()=>{
    //for resolve
    //console.log();
}).catch(()=>{
    //for error
    //for reject
});

export default promise;