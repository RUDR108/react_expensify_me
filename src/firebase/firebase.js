import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database=firebase.database();

export {firebae,database as default};



// database.ref('expenses').once('value').then((snapshot)=>{
//   const expenses=[];

//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id:childsnapshot.key,
//       ...childsnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


//'child_removed' and 'child_changed' child_added{it is printed for every child already inside or added after.}--- two other event as 'value'
// database.ref('expenses').on('value',(snapshot)=>{
//   const expenses=[];

//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id:childsnapshot.key,
//       ...childsnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

//child_remove
// database.ref('expenses').on('child_removed',(snapshot)=>{
//   // const expenses=[];

//   // snapshot.forEach((childsnapshot) => {
//   //   expenses.push({
//   //     id:childsnapshot.key,
//   //     ...childsnapshot.val()
//   //   });
//   // });
//   console.log(snapshot.key,snapshot.val());
// });

//child change
// database.ref('expenses').on('child_changed',(snapshot)=>{
//   // const expenses=[];

//   // snapshot.forEach((childsnapshot) => {
//   //   expenses.push({
//   //     id:childsnapshot.key,
//   //     ...childsnapshot.val()
//   //   });
//   // });
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').push(
// {description:'abc',
// note:'note1',
// amount:'amount1',
// createdAt:0
// },

//   );

  
// database.ref('expenses').push(

//   {
//     description:'abcd',
//     note:'note2',
//     amount:'amount2',
//     createdAt:1000
//     },

//     );

//     database.ref('expenses').push(

//         {
//           description:'abcde',
//           note:'note3',
//           amount:'amount3',
//           createdAt:10000}
//         );
    

   

// database.ref().on('value',(snapshot)=>{
//   const value=snapshot.val();
//   console.log(`${value.name} is a software developer at ${value.job.company}`);
// });

//off() --- off the subscription.

// database.ref('location/city').update('sseattle');

//   database.ref().set({
//       name:"My name",
//       stressLevel:6,
//       job:{
//           title:'software developer',
//           company:'Google'
//       },
      
//         location:{
//             city:'Philadelphia',
//             country:'United State'
//         }
//   }).then(()=>{
//     console.log('Data is saved');
//   }).catch((e)=>{
//       console.log('error');
//   });

// //   database.ref('loc/d').set('rudge');

// //   database.ref('attributes').set({
// //       height:181,
// //       weight:55
// //   });

// // database.ref('loc/d').remove().then(()=>{
// //     console.log('removed');
// //});

//                         //update

// database.ref().update({
//  stressLevel:9,
//  'job/company':'amazon',
//  'location/city':'Seattle'
// });
