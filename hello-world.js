console.log("hello world")

//1.comments
// used to provide information about the code
// can be used in general to provide any information or suggestions
// makes sit easy to understtand the code or get more information about the code
// can also be used to comment out code sections
// comments are ignored by java script engines
// comments can be single line or multi line
// examples
// this is a single line comment
/*
this is a multi line comment
*/

// 2. variables
// used to store data
// can be looked at as containers for storing data values
// must contain only letters, digits, or$ and _ symbol

// guidelines for names variables
// must begin with a letter or _
// shdnt start with a number
// mustnt be a reserved key word like if, else,boolean, let,var, const etc
// variables are case sensitive
// use meaningful names
// use carmel casing

// var was used in earlier versions but now we use let and const

// examples
// variable declaration
let age;
// variable initialisation
age = 23
// = this is called an assignment operator
let studentName = "monica"
console.log(studentName)
// declaring many variables on the same line
let firstName, lastName, cohort, year;
firstName = "mary";
lastName = "Adeke";
cohort = 12;
year = 2023;
firstName = "jemimah"
console.log(firstName)

// dealing with constants
const carName = "harrier"
console.log(carName)
// carName = "subaru"
// console.log(carName)

// naming conventions
// carmelcase eg firstName
// pascalcase eg FirstName
// snakecase eg first_name
// allcaps snake case eg FIRST_NAME
// Kebabcase eg first-name
let trustMe
console.log(trustMe)

// variable scopes
let nam1 = 5;
let nam2 = 10;
if(nam1>nam2) {
    console.log("nam1 is greater than nam2")
}else{
    console.log("nam2 is greater than nam1")
}
let age1 = 6;
let age2 = 5;
if(age1==age2){
    console.log("age1 is equal to age2")

}else{
    console.log("age 1 is greater than age2")
}