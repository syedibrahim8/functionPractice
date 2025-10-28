// 1. Simple Function

// example
function greet(){
    console.log("Hi everyone");
}
// greet();

// example 1
function trafficLight(){
    let color = "green";
    if(color == "red"){
        console.log("Stop immediately.");
    }
    else if(color == "yellow"){
        console.log("Slow down! get ready to stop.");
    }
    else if(color == "green"){
        console.log("you can proceed and continue driving.");
    }
    else{
        console.log("Invalid! it's not a traffic light.");
    }

}
//trafficLight();

// example 2 

function table(){
    for(i = 1; i <= 10; i++){
    console.log(`6 X ${i} = ${i*6}`);
    }
}
//table();

// example 3

function object(){
    let person = {
        fname : "Syed Ibrahim",
        age : 20,
        city : "Hyderabad"
    }
    console.log(`My name is ${person.fname} \nMy age is ${person.age} \nI live in ${person.city}`);
}
object();