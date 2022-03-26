class Employee {
    constructor(fullName, hireDate, salary) {
        this.fullName = fullName;
        this.hireDate = hireDate;
        this.salary = salary;
    }

    getName() {
        console.log(this.fullName.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(fullName, hireDate, salary, descriptionOfJop) {
        super(fullName, hireDate, salary);
        this.descriptionOfJop = descriptionOfJop;
    }

    jopDescription() {
        console.log(this.fullName + " was hired on " + this.hireDate + " and earns " + this.salary + " per month. He is The " + this.descriptionOfJop)
    }
}

class Designer extends Employee {
    constructor(fullName, hireDate, salary, experience) {
        super(fullName, hireDate, salary);
        this.experience = experience
    }
    yearsExperience() {
        console.log(this.fullName + " was hired on " + this.hireDate + " and earns " + this.salary + " per month. She has " + this.experience + " of experience")
    }
}

class SalesAssociate extends Employee {
    constructor(fullName, hireDate, salary, degree) {
        super(fullName, hireDate, salary);
        this.degree = degree;
    }
    degreeCompleted() {
        console.log(this.fullName + " was hired on " + this.hireDate + " and earns " + this.salary + " per month. His last education is " + this.degree)
    }
}

let stManager = new Manager("Mr. John Mackally", "12.11.2012", "$6300", "CEO")
stManager.jopDescription();
let stDesigner = new Designer("Ms. Lily Wanda", "01.01.2016", "$3800", "23 years")
stDesigner.yearsExperience();
let stSalesAssociate = new SalesAssociate("Mr. Salim Ahmed", "19.09.2019", "$2500", "Secondary School Degree")
stSalesAssociate.degreeCompleted();