function even(num) {
    let result = "";
    if (num%2==0) { 
        return "Even";
    }
    else {
        return "ODD";
    }
}
console.log(even(2));

console.log("================");

function even1(num) {
    let result = "";
    if (num%5==0) { 
        return "Bar";
    }
    else {
        return "Foobar";
    }
}
console.log(even1(5));