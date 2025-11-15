// Arrow function

let marks = (n) =>{
    if (n >= 90){
        console.log("Your grade is A+");
    }
    else if (n >= 80){
        console.log("Your grade is A");
    }
    else if (n >= 70){
        console.log("Your grade is B");
    }
    else if (n >= 60){
        console.log("Your grade is C");
    }
    else if (n >= 50){
        console.log("Your grade is D");
    }
    else {
        console.log("You failed!");
    }
}
marks(75);

//


let fever = (temp)=>{
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
//fever(104);

//

let table = (n)=>{
    for(i = 1; i <= 10; i++){
    console.log(`${n} X ${i} = ${i*n}`)
    }
}
//table(18);