let edibles = ["Mangoes", "bananas", "oranges", "apples" ];

for(i = 0; i < edibles.length; i++ ){

    switch(edibles[i]){

        case "mellon":
            console.log("This is a mellon");
            break;

        case "oranges":
            console.log("This are oranges");
            break;

        case "pawpaws":
            console.log("This is are pawpaws");
             break;

        case "apples":
            console.log("This are apples");
            break;

        default:
            console.log("fruit not specified")
    }
}

function SayHi(){
    console.log("hello")
    console.log("i love you")

}
SayHi()

// functions need to be passed or called out
function Mary(){
    console.log("the best name in the world")
    console.log("Iam the CEO of my life")
}
Mary()

// dealing with sums
function Sum(x, y){
    console.log(x + y)
}
Sum(9, 4)
Sum(5, 7)

// dealing with subtraction
function differnce(a, b){
    console.log(a-b)
}
differnce(10,1)

// functions
// when we