// function expression 

let trafficLight = function(){
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
trafficLight()

// Example2

let fever = function(temp){
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
fever(104);

// example3

let table = function (n){
    for(i = 1; i <= 10; i++){
    console.log(`${n} X ${i} = ${i*n}`)
    }
}
table(17);