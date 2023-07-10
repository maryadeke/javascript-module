// polymorphism
// poly means many
// morph means forms
// polymorhism in oop is the ability to create a variable, a function, or an object that has more than one  form
// polymorphism is the oop principle which provides the facility to perform one task in many ways

// example
class Animal{
    constructor(animalName){
        this.animalName = animalName
    }
    // this method/ function is polymorphic bse it also exists in the child class aligator
    eats(){
        console.log(this.animalName + " eats meat")
    }

}

class Aligator extends Animal{
    eats(){
        super.eats();
        console.log(this.animalName + ' '+ 'eats fish');
    }
}

let tool = new Aligator('crocodile');
tool.eats()