// Mid Term Assessment: Classes & Constructors 
// Assessment Duration: 45 Min
// Assessment Total: 100
// DV200: Assessment A

// Instructions: 
// Using Classes and the basic principles of OOP, refactor the below procedural code into Object Oriented Code. 

// PART ONE: Super Class 
// 1. Using the information provided below, convert the following variables and functions into a class template called USER. 
// 2. Using the principle of Abstraction, ensure the setSystemId method and sys_id property, are set private
// 3. The setSystemId method must run automatically when the constructor function is invoked.

//PART TWO: Class Inheritance 
// 4. Create a New Class that inherits from your Super class, call this new sub-class 'DivisionHead'
// 5. The constructor method must include 4 Parameters, 'first', 'last', 'department' and 'sector'
// 6. Dont forget to use the super(); function in gain access to the super class properties.  
// 7. Take a look at SNIPPET ONE, include the Method in the sub-class as a public method.

//PART THREE: Final Instance  
// 8. Create a New Class that inherits from your DivisionHead class, call this new sub-class 'Intern'
// 9. The constructor must take two parameters, 'first' and 'last'
// 10. Take a look at SNIPPET TWO, include the Method in the sub-class as a public method.

//PART FOUR: Invoking Constructors 

// 11. Assign a let variable called userEx and create a new instance of the USER class.
// 12. Assign a let variable called divHead and create a new instance of the DivisionHead class.
// 13. Assign a let variable called internOne and create a new instance of the Intern class.
// 14. Invoke the assignHead Method from internOne

class USER{
    constructor(){
        this.first = "John";
        this.last = "Doe";
        this.username = "JohnnyD420";
        this.email = "johndoe@genericemail.com"
        let sys_id = "";
        this.dutyStatus = false;
    }

    setSystemId() {
        sys_id = Math.round(Math.random() * 100000);
        alert(first + " " + last + " has been assigned system id: " + sys_id);
    }

}

class DivisionHead extends USER{
    constructor(first, last, department, sector){
        super();
        this.department = department;
        this.sector = sector;
    }

    updateSector(){
            const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
            let value = Math.round(Math.random() * 4);
            this.sector = sectors[value];
            alert(this.first + " " + this.last + " has been assigned to " + this.sector);
        }

}


class Intern extends DivisionHead{
    constructor(first, last){
        super()
    }
     assignHead(){
            const divHeads = ['','Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
            let value = Math.round(Math.random() * 4);
            this.sector = divHeads[value];
            alert(this.first + " " + this.last + " has been assigned to " + this.sector);
        }
}


    let userEx = new USER("Jack","Doe","Jack1234","jackdoe@assingment.co.za");
    let divHead = new DivisionHead("Sally","Walters","SpaceExploration","4");
    let interOne = new Intern("Nick","Sams");

    let intern = new Intern(2);
    intern.assignHead();



function onDuty() {
    if (!dutyStatus) {
        dutyStatus = true;
        message = "On"
        alert(first + " " + last + " is now " + message + " duty...");
    } else {
        dutyStatus = false;
        message = "Off"
        alert(first + " " + last + " is now " + message + " duty...");
    }
}

// SNIPPET ONE: class DivisionHead public method:

// updateSector(){
//     const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = sectors[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }

// SNIPPET TWO: class Intern public method:
// assignHead(){
//     const divHeads = ['','Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = divHeads[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }
