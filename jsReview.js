//Variables - Variables are used to store information. JS is not strict type

//Variable types
var a = 10; 
var name = "Tom"; 
var middleName = 'D'; 
var isHot = false; 

//Arrays
var arrayNumbers = [1, 2, 3, 4, 5]; 
var arrayofNames= ["Frank", "John"]; 

// Objects 
var obj1 = {
    name: "Hussein",
    age: 20
}


//Functions - Functions are blocks of resuable code that can be called by name

function myFunction(){
    console.log("Hey"); 
}

//passing paremeters to a function
function myFunction2(greeting){
    console.log(greeting); 
}
myFunction2("Hey yourself"); 


//Branches


//Flow Control (Conditionals)

//Basic if else
if(true){
}else {

}
// if else with multiple conditions
if(a == 1){ 
    doThis;
} else if (a ==2) {
    doThat;

} else {
    dootherthings;

}
// Switch conditions
var zipCode; 

switch(zipCode){
    case 98101:
        doStuff; 
        break; 
    case 98109:
        doStuff2
        break; 
    default:
        doContingent;
        break; 

}
    







//Flow Control (Loops) 

//For Loops - Finitie counting
for(var i = 0; i > 10; i ++){
    doStuf; 
}

// While Loops - Infinite counting when you dont know how much you want to count
var b = true; 
while(true){
    doStuff; 
    if(someCondition){
        b = false; 
    }
}


// Data structures 