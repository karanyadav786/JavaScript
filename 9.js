/*                                               PROTOTYPES 

                    --Prototype is javascript object which is an entity having properties(variables) and methods 
                    --Javascript objects have special property called prototype object
                      (object ke andar prototype object)
                    -- we can set prototype using   _ _ proto _ _
                    -- if prototype and objects having same name of methods , then object's method will be used

*/
 
const student = {
    fullName : "Karan Yadav",                 
    marks :89.5,
    printFullName(){                             // 1st way to write function
        console.log(this.fullName);              // this keyword is used with variable because we cannot directly
                                                 // access the variable in the objects and classes
                                          
     },
    printMarks : function(){                      // 2nd way to write function
             console.log(this.marks);
    }    
};
console.log(student);
student.printFullName(); 
student.printMarks();   
student.toString();            //although , I do not make the toString() function in my object  
                               //but toString() function is available in prototype object which is in the student object . so we can use this.
                               // this is actual usage of prototype  




const employee = {
    calcTax(){
        console.log("10% tax ");
    }
};
const emp1 ={
    salary : 1500 
};
emp1.__proto__ = employee;        // we can use the methods and variables of the employee object 
console.log(emp1.salary);
console.log(emp1.calcTax());      // gives UNDEFINED value








/*                                           CLASSES  AND  OBJECTS 

                  -- Class is template for creating the objects
                  -- Single class can have multiple objects
                  -- Second way to create a objects in JS  --- with using class
                  -- the object created by the class have all the properties which is in the Class
                  -- "new" keyword is used to create the -- object of the class  

                   CONSTRUCTOR
                 
                 -- constructor() method is automatically invoked by when we created the object of that class
                 -- if we do not make constructor() method in our class , but JS creates constructor() by its own
                 -- initialize the objects -- object banate hue humko kuch start karwana ho to 
                                           -- let obj = new myclass(); -- myclass() is constructor 


*/

// CLASS 
class car{
    start(){
        console.log("The car is going to start !!! ");
    }
    stop(){
        console.log("The car is going to stop !!! ");
    }
    setBrand(brand){
        this.brandname =  brand;     // this.brandname is used  for each object of the class, we can set the value
        console.log(brand);     
    }
}

//CREATING MULTIPLE OBJECTS OF THE CLASS 
let fortuner = new car(); 
console.log(fortuner);                  
fortuner.start();
fortuner.stop();
fortuner.setBrand("Fortuner Car");

let lexus = new car();
console.log(lexus);                  
lexus.start();
lexus.stop();
lexus.setBrand("Lexus Car");




//CONSTRUCTOR
class actors{
    constructor(){
        console.log("The new object is created for the class");
    }
    acting(){
        console.log("They are doing acting");
    }
}
let deepika = new actors();      // we are not invoking any function , but the constructor() invoked by itself when 
                                // we created any new object 
// deepika.constructor();       //  gives error , because we cannot invoked constructor without new keyword







/*                                             INHERITANCE 
         
                     -- When child class derived the properties of the parent class
                     -- Inheritance occurs between classes , not b/w classes and objects
                     -- Method Overriding : when the same method is there in the parent class & child class 
                                            then child class's method will be used  
                    
                      SUPER keyword
                    --
*/


class person{
    eat(){
        console.log("The person is eating");
    }
    sleep(){
        console.log("The person is sleeping");
    }
    work(){
        console.log("Do nothing");
    }
}

class doctor extends person{
    work(){
        console.log("Gives Medicine");
    }
}

let karanDoctor = new doctor();
console.log(karanDoctor);
karanDoctor.eat();
karanDoctor.sleep();
karanDoctor.work();                   // method of the child class will be invoked




// SUPER KEYWORD
class men{
    constructor(name){
        console.log("ENTER PARENT CONSTRUCTOR");
         this.species = "Humans";               // fixed value 
         this.fullName = name;                  // for each object this fullNAme is different if we give the value
    }
    food = "mango";    // we can only declare the varaible directly . we cannot use let ,const
    eat(){
        console.log("The men is eating");
    }
    
}

class zayn extends men{
    constructor(name){
        console.log("ENTER CHILD CONSTRUCTOR");
        super(name);                                    // to invoke Parent class Constructor 
        console.log("The name is : " , name);
        console.log("EXIT CHILD CONSTRUCTOR");
        }
   
    run(){
         // eat();    // gives error  -- we cannot access directly
        super.eat();                            //super is used for accessing the method of parent class
        console.log("The men is eating : " , this.food );  //this is used for accessing the varaible of parent class
    }
    
}

let obj = new zayn("Zayn Malik");
console.log(men);
console.log(zayn);
console.log(obj);
obj.run();







// PRACTICE QUESTIONS : 1.create a class user with 2 properties name and email . It also have method viewData() . 
//                      2. craete a new class admin which inherits from user , add new method editData() 
//                        to admin that allows to edit the data  

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;     
    }

    viewData(){
        console.log("View Data");
    }
}
let stu1 =new user("karan","karan@gmail.com");
let stu2 =new user("priyanka","pikku@gmail.com");
console.log(stu1);
console.log(stu2);
stu2.viewData();


class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        console.log("Edit Data");
    }
}
let admin1 = new admin("komal" , "komal@gmail.com");
console.log(admin1);
admin1.editData();





  
/*                                        ERROR HANDLING
 
                -- if there is error in between the code , the error handling handles that error and the normal flow of program continues
                -- use of try and catch block

*/

let a = 10;
let b = 0;
console.log(a+b);
console.log(a-b);

try{                                  // try -- error may be occur 
    console.log(a/c);                
}
catch(error){                         // catch -- handles that error 
    console.log(error);
}

console.log(a*b);
console.log(a%b);