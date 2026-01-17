/*                                                    JAVASCRIPT 

                    -- Javascript is a programming language 
                    -- JS is used for Web Development purpose 
                    -- JS is used for Frontend Web Development 
                    -- JS is case sensitive language                                             */

        
/*                                 Why we connect the JS file to HTML file ?

                   --JS do not have direct link with the browser so that our JS code ka output will visible in console part 
                   --But HTML have direct link with the browser 
                   --So we Indirectly connect the JS with the browser by connecting the JS with HTML   */






//  console : like a platform for the JS to run the code and give its output
//  log : inbuilt function tells the console to show some text or information on the screen.
//  we can use " " or ' ' inside the brackets
//  the semicolon is optional

console.log("Jai Maa Vaishno Devi Ji");  // as it is print in the screen/console
console.log('Jai Shiv Ji');
console.log('Jai Baba Nage Shah Ji')





/*                                            VARIABLES 

                -- Variables are the containers of the data 
                -- We can  store the different types of data in the variable
                -- The data inside the variable can be change anytime so thats why it is called as variable(not constant) 
                -- Variables are DYNAMICALLY TYPED 
                means we do not have to declare the data type of varaible i.e. string fullName ="Karan Yadav"; 
                interpreter interprets dynamically the data type of variable 
                we can change the data type of the variable i.e fullName = "karan Yadav";
                                                             to fullName = 25;

                -- VARIABLES RULES
                1.Case sensitive
                2.Only alphabets , numbers , _ , $ are allowed
                3.No blank space is allowed
                4. only alphabets, _ , $ should be 1st character of the variable
                5. No Reserved Keywords

                -- We generally use Camel Case i.e. isFollow 

                -- Variables can be declared with var , let , constt 

                var : variable can be re-declared and updated . Global scope variable (no use of this )
                
                let : variable cannot be re-declared but can be updated . Block scope variable

                constt : variable cannot be re-declared or updated . Block scope variable


                
                      */


fullName = "Karan Yadav";
console.log(fullName);

isFollow = true;
console.log(isFollow);

fullName = 25;                   // variable's data type changed from string to int 
console.log(fullName);

  

var age = 12;                
var age = 15;                    
var age = "deepika";
console.log(age);


let price = 1500;
    price = 1700;
    price="changed from int to string"
console.log(price);


const pi = 3.14;
    // pi = 55;   -- gives error -- cannot be updated 
console.log(pi);


let a;           // gives undefined  as output
const b=12;      // always have to be declared
console.log(a);
console.log(b);





/*                                          DATA TYPES 

               -- The type of data stored in the variable 

               --PRIMITIVE DATA TYPES (7) : Number , String , Boolean , Undefined , Null , BigInt , Symbol
               --NON PRIMITIVE DATA TYPES : Objects (Arrays and functions like )

               */

let num1 = 24 ;
console.log(typeof num1);

let num2 = -24.56 ;
console.log(typeof num2);

let fullName1 ="Karan ";
console.log(typeof fullName1);

let bool =true;
console.log(typeof bool);

let x;
console.log(typeof x);

let y = null;
console.log(typeof y);     // data type object aayega 


// OBJECT : collection of variables of any data type . It is a key : value pairs
const student = {
      Name : "Karan Yadav" ,
      branch : "CSE" ,
      age : 23 ,
      sgpa : 9.0
};
console.log(typeof student);
console.log(typeof student.branch);
console.log(student);
console.log(student.Name);
console.log(student["sgpa"]);

student.Name = "Deepika Padukone";   // when we use const in object , we can change the object's variable value , 
                                      //  but cannot change the whole object 
console.log(student.Name);


// String + number Concatenations
let string1 = "karan";
let number1= 123;
console.log(string1 + number1 );

let string2 = "123";
let number2= 123;
console.log(string2 + number2 );



                                                         // PRACTICE 

const product ={
      titleName : "Parker Jotter Standard CT Ball Pen" ,
      color : "Black" , 
      ratings : 4 , 
      price : 270 , 
      offer : "5%"
};
console.log(product);










