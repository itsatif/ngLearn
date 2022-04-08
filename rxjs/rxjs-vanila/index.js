// const { Observable } = require("rxjs");
// const { pluck, map, filter } = require("rxjs/operators");

// const users = {
//   data: [
//     {
//       id: 1,
//       status: "active",
//       age: 14,
//     },
//     {
//       id: 1,
//       status: "inactive",
//       age: 12,
//     },
//     {
//       id: 1,
//       status: "active",
//       age: 42,
//     },
//     {
//       id: 1,
//       status: "inactive",
//       age: 42,
//     },
//     {
//       id: 1,
//       status: "active",
//       age: 13,
//     },
//     {
//       id: 1,
//       status: "inactive",
//       age: 75,
//     },
//     {
//       id: 1,
//       status: "inactive",
//       age: 43,
//     },
//     {
//       id: 1,
//       status: "inactive",
//       age: 54,
//     },
//     {
//       id: 1,
//       status: "active",
//       age: 7,
//     },
//     {
//       id: 1,
//       status: "active",
//       age: 17,
//     },
//   ],
// };

// const observable = new Observable((subscriber) => {
//   subscriber.next(users);
// }).pipe(
//   pluck("data"),
//   filter((users) => users.length >= 10),
//   map((users) => {
//     return users.filter((user) => user.status === "active");
//   }),
//   map((users) => {
//     return users.reduce((sum, user) => sum + user.age, 0) / users.length;
//   }),
//   map((average) => {
//     if (average < 18) throw new Error(`Average age is too small (${average})`);
//     else return average;
//   }),
//   map((average) => `The average age is ${average}`)
// );

// const observer = {
//   next: (x) => console.log("Observer got a next value: " + x),
//   error: (err) => console.error("Observer got an error: " + err),
//   complete: () => console.log("Observer got a complete notification"),
// };
// const observer2 = {
//   next: (x) => console.log("Observer 2 got a next value: " + x),
//   error: (err) => console.error("Observer 2 got an error: " + err),
//   complete: () => console.log("Observer 2 got a complete notification"),
// };

// observable.subscribe(observer);

// observable.subscribe(observer2);


// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);

// let x = 1;

// while(x<60 && x>0){
//   x++;
// }

// console.log(x);

// const input = 30
// if(input % 3 ===0){
//   console.log('Raja');
// }else if(input % 5 === 0){
//   console.log('Software');
// }

// if(input % 3 === 0 && input % 5 ===0){
//   console.log('Raja Software');
// }else{
//   console.log('Exit');
// }

// for(let i=3;i<15;i+=3){
//   console.log(i);
//   ++i;
// }

// const logSom = () => {
//   const x = 'Addresses'
//   let ans = ''
//   let i;
//   for(i=0;i<x.length();i++){
//     let count = 0;
//     for(let j=i;j<x.length();j++){
//     if(x.charAt(i) === x.charAt(j)){
//       count++;
//       break;
//     }
//     }
//     ans = `${ans}${x.charAt(i)}${count}`
//   }
//   console.log(ans);
// }
// logSom();

const log = () => {
  const str = 'Sakkett'
  let count = 0;
  for(let i=0;i<str.length;i+=2){
     for(let j=0;j<str.length;j++){
       if(str[i] === str[j]){
         console.log(str[j]);
         count++;
         break
       }
     }
  }
 
}
log()