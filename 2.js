//                                             OPERATORS


/*                                        ARITHMETIC OPERATORS

                  Binary Operators (work on two operands)
                1. + 
                2. -
                3. *
                4. /
                5. Modulus (gives Remainder ,sign is % )
                6. Exponential (gives power , sign is **)

                  Unary Operator (works on one operand)
                7. Increment 
                   a++; same meaning as  a = a+1;
                8. Decrement
                    a--; same meaning as  a = a-1;

*/

let a=5;
let b=2;
console.log("a = ",a);
console.log("b=" ,b);
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b);


let c=10;
console.log("actual value of a = " , a);

console.log("c++ = " , c++);    //post increment - firstly write the actual value of variable , then increment (10)
console.log("++c = " , ++c);    //pre  increment - firstly increment the value of variable,then write that value(12)

console.log("c-- = " , c--);    //post decrement - firstly write the actual value of variable , then decrement (12)
console.log("--c = " , --c);    //pre decrement - firstly decrement the value of variable ,then write that value(10)
                    
                                // ye jo hum console.log ke andar change karte hai , ye variable mai overall change laata hai , like in above example


                
/*                                      ASSIGNMENT OPERATORS

                  1. =
                  2. +=
                  3. -=
                  4. *=
                  5. /=
                  6. %=
                  7. **=
*/
let d=10;
d += 5;    // d = d + 5;
console.log(d);




/*                                       COMPARISON OPERATORS
                     
                        -- to compare the two values 
                        -- always gives True / False

                 1. Equal to                   == 
                 2.Equal to &equal datatype    ===
                 3. Not equal to               !=
                 4. Not equal to and type      !==
                 5. Greater than               >
                 6. Greater than and equal to  >=
                 7. less than                  <
                 8. less than and equal to     <=

*/

let e = 15;
let f = 100;
let g = "15";
console.log("e==f" , e==f)     // false 
console.log("e!=f" , e!=f)     // true
console.log("e==g" , e==g)     // true because js implicitly converts string into number and then compare the value
console.log("e===g" , e===g)     // false because it check the datatype too
console.log("e!==g" , e!==g)     // true 





/*                                        LOGICAL OPERATORS

                         -- give output as True / False

                    1. AND    &&
                    2. OR     ||
                    3. NOT    ! 

*/
let h = 2;
let i = 22;
console.log(" h<=i && i==22 " , h<=i && i==22 );    // true 
console.log(" h<=i && i===100 " , h<=i && i==100 );   // false

console.log(" h<=i || i==100 " , h<=i || i==100 );     //true
console.log(" h>i || i==100 " , h>i || i==100 );      // false

console.log("!(h>i)", !(h>i))    // true 










//                                           CONDITIONAL STATEMENTS

/*                  -- to implement some condition in the code
 
                    1. if 
                    2. else-if
                    3. else

 */

let age = 15;

if(age < 18)
{
   console.log("Children");
}
else if(age >= 18 && age <= 30 ) 
{
  console.log("Younger");
}
else
{
   console.log("Older");
}


// Checking number is odd or even 

let value = 14;
if(value%2 === 0)
{
  console.log(value , " is even number");
}
else
{
  console.log(value , " is odd number");
}




//                                              TERNARY OPERATORS

/*                     -- work on three operands
                       -- short way of conditional statements
                       -- condition  ? true output : false output ;
 */

                
let marks = 37;
let result =  marks>=33 ? "Pass" : "Fail" ;
console.log(result);




//                                          ALERT  AND  PROMPT 

/*            -- Alert : used for one time pop up when we open the page 
              -- Prompt : used for pop up + takes the input from the user 
*/

alert("Jai Maa Vaishno Devi Ji");
alert("Karan loves Deepika Padukone");

prompt("Enter your good name ");         // in this the user input is not being stored 


//Practice Questions : Get input from the user and check the number is multiple of 5 or not 

let j = prompt("Enter a number ");
console.log("User entered this number :" , j);
if(j%5 === 0)
{
  console.log(j , "is Multiple of 5 ");
}
else
{
  console.log(j , " is not multiple of 5 ");
}

 










