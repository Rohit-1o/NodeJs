function greetfun(name, callback1) {
    //1 : name, 2 : fun name
    console.log('Hello ' + name);
    callback1();
}
function processfun() {
    console.log('processfun functions..!');
}

// Passing processfun as the callback fun
greetfun('Rohit', processfun);
//1 : name , 2 : fun name