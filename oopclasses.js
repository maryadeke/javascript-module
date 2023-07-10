// a class is a blue print of an object
// a class should always have its name in singular
// THIS KEYWORD REFERS TO THE OBJECT OF THE CLASS

// syntax of a class
 //class ClassName {
 //   statements
// }

// example
class Employee{
    // a class always has a constructor, which is called whenever a class is instantiated or an object of the class is created
    constructor(name, ID, age, colour, education,gender){
            this.name = name;
            this.ID = ID;
            this.gender = gender;
            this.colour = colour;
            this.education = education;
            this.age = age;
    }
}   

// an object is an instance of a class

// creating objects of employee class
 let emp1 = new Employee("Mary Adeke","asde", 23, "green", "senior four","female")
 let emp2 = new Employee("Nathan Odeng","dfgt",45,"maroon","university","male")
console.log(emp1)
console.log(emp2)
console.log(emp1.name)
console.log(emp2.name)
console.log(emp1["gender"])
console.log(emp2["gender"])

class Car {
     constructor(carName,manufacturer, type,speed,color){
        this.carName = carName;
        this.manufacturer = manufacturer;
        this.type = type;
        this.speed = speed;
        this.color = color;
     }
    }
    let car1 = new Car ("rangerover","toyota","mycar", "100km/hr","green")
    console.log(car1)