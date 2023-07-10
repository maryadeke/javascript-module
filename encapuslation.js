// Encapuslation
// a mechanism of restricting direct access to some of the object components
// a mechanism of bundling data with methods that operate that data

// there are two ways of encapulsation in js
// 1. making data members private using var/ let keyword
// 2. set the data using setter methods and get the data using getter methods

// we can manange read and write access of object properties by using encapulslation
// Read Only Access; If we declare getter methods only, then it facilitates the read only access
// Write Only Access; if we declare setter method sonly, then it facilitates the write only access
// Read and Write Acess; if we declare both setter and getter methods then it facilitates both read and write access

// why encapuslation
// . security; controlled access- guards an object against illegal access
// 2. hide implementations and exposure behaviour- helps to archieve a level without revealing its complex details
// 3. loose coupling- modify the implementation any time
// 4. make the application more flexible and manageable
// 5. simplifies the application

// example
class Worker{
    constructor(){
        // these are encapslated
        let workName;
        let rating;
        let number;
    }
    // getter method
getWorkName(){
    return this.workName;
}
    // setter method
    setWorkName(workName){
        this.workName = workName;
    }
    // getter method
    getRating(){
        return this.rating;
    }
    // setter method
    setRating(rating){
        this.rating = rating;
    }
    // getter method
    getNumber(){
        return this.number;
    }
    // setter method
    setNumber(number){
        this.number = number;
    }
}
let worker = new Worker();
worker.setWorkName("Mary")
worker.setRating(5)
worker.setNumber(345)
console.log(worker.getWorkName() +  ' ' + worker.getRating() + ' '+ worker.getNumber());
console.log(worker)
console.log(worker.getWorkName())
console.log(worker.getRating())

// eaxample 2
class employee{
    setEmpDetails()
}

    
    









