/*                                                 FUNCTIONS 

             -- block of code that performs specific task and can be called/invoked any no. of times when needed 
             -- reduce the number of lines of code
             -- reduce the repeatition in code i.e removes redundancy
             
             1.Function definition : gives the body of the function
             2.Function Call : invoked the function definition when we needed 
                             : without function call the function definition do not occur

                

*/


// function without parameters 
function myFunction1()                                  // function definition
{
    console.log("Jai Maa Vaishno Devi ");
}
myFunction1();                                          // function call


// function with parameters 
function myFunction2(msg)                    // parameters
{
    console.log(msg);
}
myFunction2("My name is Karan Yadav");       // arguments 


// functions without return value 
function myFunction3(x,y)                 // x and y are block scope variable / local variable 
{
      console.log(x+y);
}
myFunction3(2,3);


// function with return value 
function myFunction4(x,y)                  
{
    sum = x+y;
    return sum;                       // this return statement return the sum value to the function called place 
}
let result = myFunction4(2,3);
console.log(result); 


//function 
function myFunction5(x,y)
{
    console.log("Before Return , this statement will occur ");
    return x+y;
    console.log("After Return , this statement will not occur ");
}
let res = myFunction5(34,45);
console.log(res);







/*                                              ARROW FUNCTIONS 

                     -- compact way to write the function 
                     -- sign of arrow function is  :    =>
*/

const arrowSum = (x,y) =>{               // const datatype because the function defintion will not be changed 
    console.log(x+y);
}
arrowSum(2,3);
console.log(typeof arrowSum);            // datatype is function 
console.log(arrowSum);                   // gives the function definition jaise koi varaible ki value deta hai 


const arrowHello = () => { 
    console.log("helloooo");
}
arrowHello();


// Practice : Create a function using function keyword that takes as argument a string and returns the number of vowels in the string 

function vowelCount(inputString)
{
    let count =0;
    for(let char of inputString)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    return count;
}
console.log(vowelCount("aeiou"));
console.log(vowelCount("xyz"));
console.log(vowelCount("Karan Yadav"));
console.log(vowelCount("Priyanka"));





/*                                               forEach LOOP in Arrays
 
                  -- arr.forEach( Call Back Function)

                  -- forEach is the method 
                  -- when function is associated with some data structure then it is called Methods
                     like forEach function is associated with Arrays always

                -- forEach gives us three things : value , index , array ( all 3 values are fixed position)

                  -- Call Back Function : function to execute for each element in the array
                                        : A call Back is a function passed as an argument to another function 

*/
// with function keyword 
let states = ["Punjab", "Himachal Pradesh", "Bihar"];
states.forEach( function myFunc (value){                      // forEach method for arrays
               console.log(value);
              }
)

// with arrow function 
states.forEach( (val , idx , arr) => 
    { 
        console.log(val , idx, arr)
    }
)

// Practice : for given number of array , find the square of each number using forEach loop
let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach((value) => {
    square = value*value;
    console.log("the square of the" , value , "is" , square);
})

/*                HIGHER ORDER FUNCTIONS / METHODS 

          -- function takes the function as a parameter
          -- function return any other function 
          -- eg : forEach loop
*/





/*                                       SOME MORE ARRAY METHODS 

                   1. Map Method : create a new array with result of some operation done in actual array 
                                 :  arr.map(CallBack Function (value , index , Array))

                   2.Filter Method : creates a new array of elements which gives true for some condition/filter

                   3.Reduce Method : performs some operations and reduce the array to the single value 
*/

// Map method 
let num1 = [1,2,3,4,5,6,7,8,9];
let newarr1 = num1.map( (value) => {         // new array is created 
     return value*value;
})
console.log(num1);
console.log(newarr1);

//filter method
let num2 = [1,2,3,4,5,6,7,8,9,10];
let newarr2 = num2.filter( (value) =>{
    return value%2 === 0;
})
console.log(num2);
console.log(newarr2);

// Reduce Method 
let num3 =[1,2,3,4];
let singleValue1 = num3.reduce( (res , curr )=>{
    return res+curr;
})
console.log(num3);
console.log(singleValue1);


let num4 =[1,786,54,33,0,1,2];
let singleValue2 = num4.reduce( (res , curr )=>{
    return res>curr ? res : curr;
})
console.log(num4);
console.log(singleValue2);




//Practice  : Take a number "n" as input from the user . create an array from 1 to n .
//            use reduce method to calculate the sum of all numbers in the given array
//            use reduce method to calculate the multiplication of all numbers in the given array

let n = prompt("Enter the number for an array :");
let array =[];                    // because to save in array format 
for (let i=1 ; i<=n ; i++)
{
    array[i-1] = i;
}
console.log(array);

let sum1 = array.reduce((res , curr) =>{
    return res+curr;
})
console.log(sum1);

let factorial = array.reduce(( res ,curr) =>{
    return res*curr;
})
console.log(factorial);







