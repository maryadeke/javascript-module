// an operator is a symbol that usaually represents an action or process
// eg let sum = 10 + 20
// = this is an assignment operator
// + this is an arithmetic operator( addition)

// list of operators
// arithmetic operators
// assignment operators
// comparison operators
// logical operators
// type operators
// bitwise operators

// 1. arithmetic operators
// + addition
// - subtraction
// * multiplication
// / division
// % modulus(remainder of division)
//  ** exponential
//  ++ increment
// -- decrement

// let z = 6+2
// 6 and 2 are called operands, these are the values on wc the operator works

// addition
let x = 8;
let y = 6;
let result1 = x + y
console.log(result1)

// subtraction
let result2 = x-y 
console.log(result2)

// multiplication
let result3 = x * y
console.log(result3)

// division
let result4 = x/y 
console.log(result4)

// modulus
let result5 = x% y
console.log(result5)
let result6 = y%x
console.log(result6)
// it jhs returns my no. incase it aint enough
let apples = 80;
let children =20;
let ourResult = apples% children
console.log(ourResult)


// exponential
let result7 = x**y;
console.log(result7)
let s = 2;
let r =5;
let resultp = s**5
console.log(resultp)

// increment
// a) post increment
let keith = 3;
// this means u increase its value after an action
let result8 = 2 + keith ++
console.log(result8)
console.log(keith)

// b)pre increment
let monica = 10;
 let result9 = 5 + ++monica
// increase the value bfore the action is done
console.log(result9)

// decrement
// a)post decrement
let ewin = 3;
let resultv = 2 + ewin --
console.log(resultv)
let resultv2 = 2+ ewin
console.log("--------",resultv2)

// b) pre dcrement
let mary = 10;
let resultm= 5 + --mary
console.log(resultm)

// incrementing by more than one
var tom = 5;
tom +=2
// this is the same as tom = tom+2
console.log(tom)

// assignment operators
// 1. assign
// eg
let tim = 12

// 2. +=add and assign
// eg
var angel = 20
angel +[2]

// 3. -= sub and assign
angel -= 7

// 4. *= multiply and assign
// eg
angel *=3

// 5. /= divide and assign
angel /= 4

// 6. %= modulus and assign
// eg
angel %= 5

// 7. **= exponential and assign
// eg
angel **= 8

// comparison operators
var change1 = 20
var change2 = 30
var change3 = "30"
var change4 = 20

// 1. == equal to
console.log(change1 == change2)
console.log(change3 == change2)
console.log(typeof change2)
console.log(typeof change3)

// 2. === strict equal (equal value and equal data type)
console.log( change2 ===change3)

// 3. != not equal to(! negation)
console.log(change1 != change4)
console.log(change2 != change3)

// 4. !== strict not equal (not equal value and type)
console.log(change2 !== change3)

// 5. > greater than
console.log(change1 > change2)


// 6. < lessthan
console.log(change1< change2)

// 7. >= greaterthan or equal to
console.log(change1>= change4)

// 8. <= lessthan or equal to
console.log(change1<= change2)

// 9. ? ternary operator
/* 
ternary operator is like if - then - else
it take three arguments
condition? value if true : value if false
*/

let age = 11
 let answer = age > 18 ?"(you can have a national id" : "you are below age  so no id"
 console.log(answer)
// if (age> 18){
//  console.log(" you can have a national id")   
// } else{
//     console.log("you are below age so no id")

// logical operators
let son1 = true
let son2 = true
let son3 = false
let son4 = false
// 1. && logical AND- returns true if both conditions are true
console.log(son1 && son2)
console.log(son1 &&son3)
// or
console.log((age > 10) &&(change1>change2))

// false and false - result is false
// false and true - result is false
// true and false - result is false
// true and true - result is true

// 2. || - logical OR - returns true if any of the conditions is true
console.log(son1 || son2)
console.log(son1  || son3)

// false and false - result is false
// false and true - result is true
// true and false - result is true
// true and true - result is true

// 3. ! logical NOT- this will return true if the condition is false and vice versa
console.log(!son1 )
console.log(!son3)

// read about bitwise operators

// type operators
// in javascript there are two type operators ie typeof and instanceof
// typeof returns the type of a variable
// we can use typeof operator to find the datatype of a javascript variable
// instanceof returns true if an object is an instanceof an object type
//  the instanceof operator returns a boolean value that indicates if an object is an instance of a particular class

// examples of typeof
let girl1 = 20
let girl2 = "beautiful"
console.log(typeof girl1)
console.log(typeof girl2)
console.log(typeof true)
console.log(typeof NaN)
console.log(typeof [1,2,2,4])
console.log(typeof {lastName : "Mary", age : 23})
console.log(typeof null)
console.log(typeof function(){})
console.log(typeof jemi)

// examples of instanceof
let lastName = new String("doe")
let num1 = new Number (123)
console.log(lastName instanceof String)
console.log(num1 instanceof Number)