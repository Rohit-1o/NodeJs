let result =(num1,num2)=>{ //arrow function
    return `${num1} / ${num2} = ${num1/num2}` 
};
console.log(result(10,5));
console.log("===============");


// without parameter 1 to 10
let result2= ()=> {
    let num = 1;
    do {
        console.log(num);
        num++
    } while(num<=10);
};
result2();