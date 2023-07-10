// a function is a reusable block of code
// syntax of a function
function functionName (){
        // function body/ statement
}

// example of non parameterised function
function add(){
    console.log(2 + 3)
}
add();// function invocation

// defining a parameterised function
function add1 (a,b){
    console.log(a + b)
}
add1(10,9)
add1(7,9)

// the return keyword
function add3(c,d){
    return (c + d)
}
console.log(add3(42, 33))

function add4(h , v){
    let sum = h + v
    return sum
}
add4()
    console.log(add4(2,10))
    console.log(add(22))// the 2nd arguement is missing so the egine fills up with undefined
    // the result will be not a no. since 22 + undefined will give NaN

    function greeting(){
        console.log("how are you")
    }
greeting()

// variable scope
// we have local and global variables
//  alocal variable has a limited scope(can be accessed only inside a function whwere it is defined)
// a global variable has a global scope(it is declared outside amy function and can be accessed by any function)

// examples of local variables
function multiply(){
    let localVariable1 = 5;
    let localVariable2 = 6;
    let product = localVariable1 * localVariable2
    return product
}
console.log(multiply())

// function addition(){
//     let total = localVariable1 + localVariable2;
//     return total
// }
// console.log(addition())

// examples of global variables
let globalVariable1 = 5;
let globalVariable2 = 3;
function multiply2(){
        let product = globalVariable1 * globalVariable2
        return product
}
console.log(multiply2())

function addition2(){
    let total = globalVariable1 + globalVariable2
    return total
}
console.log(addition2())

// arrow functions
// examples
// we drop the word function
const sum = (a,b) => {
    return a+b
}
console.log(sum(50,1))

// conscise way of writing a function with more than one line of code in the body
const sum1 = (a,b) => a + b

// example
const sum2 = (a, b) => {
    let result = a+b
    return` The result is ${result} per the calculation`
}
console.log(sum2(7,3))