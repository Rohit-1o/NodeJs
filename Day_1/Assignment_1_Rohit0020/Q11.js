function print_even(callback){
    console.log("Even numbers");

    for(let i = 2; i <= 20; i += 2){
        console.log(i);
    }

    callback();
}
function print_odd(){
    console.log("Odd numbers");

    for(let i = 1; i < 20; i += 2){
        console.log(i);
    }
}
print_even(print_odd);