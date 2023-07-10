// if statements
// if... else statements
// if... else if statement
// the syntax of an if statement
// if(){}
// if(expression){
    // statements to be executed if expression is true
// }
// else{
    // statements to be executed if expression is false
// }
// example
let weather = "shinning";
if (weather == "shinning"){
    console.log("we go swimming")
}else{
    console.log("stay in the house and watch a movie")
}
let age = 12;
if (age> 18){
     console.log("you are eligible to get a driving license")
}else if (age== 18){
    console.log("you jhs became eligible to get a driving license")
}else{
    console.log("you are not eligible to get a driving license")
}

// ternary operator
// condition? printed statement if condition is true: printed statement if condition is false


let cloudy = "carry your jacket";
let shinning = "wear light clothes";
console.log(weather == "cloudy"? cloudy: shinning)

// switch statement or switch case
let startRating = 1;
switch(startRating){
    case 1 :
        console.log("very bad");
        break;
    case 2 :
        console.log("bad");
        break;
    case 3:
        console.log("average");
         break; 
    case 4:
        console.log("good") 
        break;
    case 5:
        console.log("excellent");
        break;
    default:
        console.log("please enter a valid interger between 1 and 5");                
}
// example 2
let car = "tesla"
switch(car){
    case "mercedes":
        console.log("very legit fast");
        break;
    case "lamborgin":
        console.log("luxurious") 
        break;
    case "bentley" :
        console.log("classy") 
        break;
    case "tesla":
        console.log ("my dream car") 
        break ;
    default:
        console.log("please enter a valid car model") 
        
        // example3
        let fruits = ["apples","mangoes","oranges","pineapples"];
switch (fruits){
    case "fruits":
        console.log("delicious");
        break;
    case "watermelon":
        console.log("waterly")
        break;
        // arrays with switch cases- exercise

    switch(new Date().getDay()){
        case 0 :
            console.log("sunday")
            break;
        case 1:
             console.log("monday") 
            break;
        case 2:
            console.log("tuesday")
            break;
        default:
            console.log("please enter the valid day")           
         }



}
}
let month = new Date().getMonth();

switch(month){

    case 0:
        console.log("January");
        break;

    case 1:
        console.log("February");
        break;
  
    case 2:
        console.log("March");
        break;

    case 3:
        console.log("April");
        break;

    case 5:
        console.log("June");
        break;
    
    default:
        console.log("This is any other month from May to December ")
    
}
