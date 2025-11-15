// function wth parameters
// basic exampel

function add (a, b){      // a,b are parameters
    console.log(a+b);
}
//add (5, 6)                // 5, 6 are arguments

// example 1

function fever (temp){
    if(temp >= 104){
        console.log("Emergency! consult the doctor at once");
    }
    else if (temp >= 102){
        console.log("High fever! take medicine");
    }
    else if (temp >= 100){
        console.log("Normal fever! take rest");
    }
    else{
        console.log("Normal temperature");
    }
}
fever(100);

// example 2

function table (n){
    for(i = 1; i <= 10; i++){
    console.log(`${n} X ${i} = ${i*n}`)
    }
}
//table(9);

// example 3 

function factorial(n){
    let fact = 1
    for (i = n ; i >= 1; i--){
        fact *= i
    }
    console.log(fact);
}
//factorial(6)