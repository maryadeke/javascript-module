// there are a number of operations involved with strings
// converting a string to uppercase or lowercase
// removing specified characters
// determining the length or the number of characters for the string
// checking the alphabetical ordering of string values
// removing leading or trailing white space from values
// extract the first or last n characters from a string

//1.1 declaration
let age1 = "twentyone"

// 1.2 escape sequencies
let escape1 = "he said, \"hi there\""
let escape2 = "he said, 'hi there'"
let escape3 = 'he said, \'hi there\''
let escape4 = "he said, 'hi there'"
console.log(escape1)
console.log(escape2)
console.log(escape3)
console.log(escape4)

//1.3 concatenation
// means joining two strings
let carName1 = "subaru"
let carName2 = "tx"
console.log(carName1 + " or " + carName2)

// 1.4 string literals
let houseName1 = "Flat"
let houseName2 = "bangalow"

// 1.5 string interpolation
// sting interpolation is a handy way to merge javascript expressions with strings
// the basic syntax is
// ` something ${expression} something`
let age = 55;
console.log(`Joseph is ${age} years old`)

// 1.6 string methods
// string length
// the length property returns the length of a string
let myString = "abcdefghijklmnopqrstuvwxyz"
console.log("The length of this string is ..",myString.length)

//console.log(person["age"])




// deleting properties of an object
// delete removes the key value pair from the object and returns true
// unless it cant delete the property ie if the property isnt configurable
//console.log(delete person.age)
//console.log(person)
//console.log(delete person["gender"])



// object immutability
const myObject = {girl:"Monica",gender:"female"}
// you cant change assignment to a constant variable
// const declaration prohibits changing wat thing the constant points to, but it deosnt prohibit changing the content of that thing
// thus we can change a property in  a constant object but we cant change wic object the constant points to
console.log(myObject)
myObject.girl = "Mary"
console.log(myObject)
myObject = {height:"154cm", colour:"red"}
console.log(myObject)
console.log(delete myObject)


// object freeze
//the Object.freeze mthod is used to freeze an object//
// freezing an object doesnt allow new properties to be added to the object and prevents removinf or altering thr existing properties
// object. freeze provides the enumerability, configurability,writabilty and prototype of the object
const myObject2 = Object.freeze({})




let dog = "pitball"
let country = "uganda"
let meter = 34
let age4 = 70
console.log( dog =)

"
