const [num, ...rest]=[1,2,3,4,5];
console.log(num); //1
console.log(rest); //2,3,4,5
console.log("==============")

const [num1,num2, ...restnum]=[1,2,3,4,5];
console.log(num1); //1
console.log(num2); //2
console.log(restnum); //3,4,5