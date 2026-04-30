const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arr3 = [9,10];
const merge=[...arr1, ...arr2, ...arr3];
console.log(merge);
console.log("===========================================");

// for objects
const obj1 = {name : 'Rohit' , empid:1000};
const obj2 = {desg : 'manager' , address:'Germany'};
const final_obj = {...obj1, ...obj2};
console.log(final_obj);