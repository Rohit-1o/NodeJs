//Asynchronous function fun
//1
// function hello() {
//       console.log('Hello');
//  }
// setTimeout(hello,5000);

// 2
//setTimeout(()=>{
//  console.log('Hello');
//})

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log('Hello');
}, 3000);
console.log("three");
console.log('four');
