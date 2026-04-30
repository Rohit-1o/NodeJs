const math = require('./calculator_export')

const num1 = 10;
const num2 = 2;
const Add = math.add(num1,num2);
const Sub = math.sub(num1,num2);
const Mul = math.mul(num1, num2);
const Div = math.div(num1,num2);
console.log("Addition : " + Add);
console.log("Subtraction : " + Sub);
console.log("Multiplication : " + Mul);
console.log("Division : " + Div);
console.log(math.PI);

//=========METHOD 2 ===========
//console.log(math.add(10, 2));
//console.log(math.sub(10, 2));
//console.log(math.mul(10, 2));
//console.log(math.div(10, 2));
//console.log(math.PI);
