// a process where one class acquires properties(methods and fields) from another class
// parent class -- child class
// super class -- sub class
// base class -- derived class

// example
// parent class
class Car{
    setName(carName){
        this.carName = carName;

    }
    getName(){
        //return this carName;
        console.log("this car name is", this.carName);
    }
    startEngine(){
        console.log("starting the engine for", +  this.carName);

    }
    stopEngine(){
        console.log("stop the engine for ", + this.carName);

    }

}
// child class
class Toyota extends Car{
    topspeed(speed){
        console.log("top speed for" +  +this.carName + 'is' + speed )
    }
}
    let myCar = new Toyota()
    myCar.setName('Tesla')
    myCar.getName()
    // myCar.getEngine()
    myCar.stopEngine()
    myCar.topspeed(220)
