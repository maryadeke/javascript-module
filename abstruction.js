// an abstruction is a way of hiding the details of the implementation and showing only the functionality
// it hides certain details about thr and only shows the essential features of the
// this approach improves understandablity as well as maintainanbility of the code
// for example bse of abstruction u wont know the details of how many processes are involved on how to make a car start after igniting it
// hide details and only show essentials

// example
// no abstruction implemented
function Employee(empName, age, baseSalary){
    this.empName = empName;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000

    // this method is exposed as a property
    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus
        console.log('final salary is : ' + finalSalary)
    }
    this.getEmpDetails = function(){
        console.log('name: '+ this.empName +' age: ' + this.age)
    }
}
let emp1 = new Employee('mary', 20, 200)
emp1.getEmpDetails()
emp1.calculateFinalSalary()

// example2
// abstraction implemented
function Employee1(empName, age, baseSalary){
    this.empName = empName;
    this.age = age;
    this.baseSalary = baseSalary;
    // private variable or hidden variable
    let monthlyBonus = 1000

    // this method is hidden or abstructed
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus
        console.log('final salary is : ' + finalSalary)
    }
    // another private method or function
    let calculateEmpService = function(){
        let startYear = 1990
        let yearNow = 2023
        let yearsWorked = yearNow - startYear
        if( yearsWorked > 30){
            console.log('this employee retired')
        }else if(yearsWorked === 30){
            console.log('this employee is due retirement')

        }else{
            console.log('this emp is still in service')
        }
    }
    this.getEmpDetails = function(){
        console.log('name: '+ this.empName +' age: ' + this.age)
        calculateEmpService()
        calculateFinalSalary()
    }
}
let emp2 = new Employee1('mary', 20, 200)
emp2.getEmpDetails()

