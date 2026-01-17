//                                                        LOOP 

/*                    -- loop is used to execute the part of the code again and again ,the number of times the user 
                         want
                      1. for loop
                      2. while loop
                      3. do while loop
*/


//                                                 FOR LOOP 

    for(let count=1 ; count<=100 ; count++)
   {
        console.log(" Jai Maa Vaishno Devi Ji ");
    }
    
    
    // Table of 2
    for(let i=1 ; i<=10 ; i++)
    {
        console.log("2 * " , i , "=" , 2*i);
    }
    
    
    // Sum of 1 to n number given by the user 
    let lastNum = prompt("Enter the number : ");
    let sum=0;
    for(let i=1 ; i<=lastNum ; i++)
    {
        sum = sum + i;   
    }
    console.log("The sum of numbers from 1 to n :", sum);
    
    
    // INFINITE LOOP -- never write infinite loop , because it hangs down the chrome browser
    /* for(let i=1 ; i>=1 ; i++)
    {
    console.log(i);
    }
    */
    
    
    
    //                                           WHILE LOOP
    
    let i=1;
    while(i<=10)
    {
        console.log(i);
        i++;
    }
    
    
    //                                         DO WHILE LOOP (execute atleast 1 time always)
    
    let j=1;
    do{
        console.log(j);
        j++;
    }
    while(j<=10);



    //                                          FOR OF loop
    //      --used in strings and arrays 

let fullName= "Karan Yadav";
let sizeOfString = 0;
for(let char of fullName)
{
    console.log("Char : " , char);
    sizeOfString++ ;
}
console.log("The size of fullName string is :" , sizeOfString);





//                                                FOR IN loop
//            -- used in objects
//            -- the iterator return the key part of the object

let student = {
    Name : "Karan Yadav",
    uid : "22BCS11136" , 
    sgpa : 9.0 ,
    mobileno : 9517132296
}
for(let key in student)
{
    console.log("Key = ",key     , "                Value = ", student[key]);
}




// Print all even numbers from 0 to 100 

for(let i=0 ; i<=100 ; i=i+2)
{
    console.log(i);
}

for(let i=0 ; i<=100 ; i++)
{
    if(i%2 === 0)
    {
        console.log("Even Number : " ,i);
    }
}


// Create a game where you start with the random guess number , Ask the user to keep guessing the number until user give the correct number which you have set the game number.

let gameNumber = 786;
let guessNumber = prompt("Guess any Random Number from 0-1000 : ");
while(guessNumber != gameNumber)
{
    guessNumber = prompt("You have entered wrong number . Guess again ");
}
console.log("Congratulations , You guess the number 786 ");
alert("Congratulations , You guess the number 786 ");







/*                                              STRINGS 

                      -- sequence of characters used to represent the text
                      -- Strings are Immutable means cannot be changed in original string 

                      -- PROPERTIES of strings
                      1. String length 
                      2. String Indices

                      --TEMPLATE LITERALS : A shortcut way to have embedded expressions in strings

                      --ESCAPE Characters : New line \n , tab \t 

                      --METHODS in Strings : inbuilt functions to manipulate a string 

                      1. String to UPPERCASE  
                      2. String to lowercase 
                      3. Trim  -- remove all the blank spaces from beginning and ending
                      4. Slice(start , end) -- return the part of the string 
                                            -- ending index will not be count
                      5. str1.concat(str2)  -- joins the string 2 with string 1
                      6. Replace(searchValue , NewVAlue) -- change the particular value in the string for 1st 
                                                                occurence only
                      7.ReplaceAll(searchValue , NewVAlue) -- change the particular value in the string for all the 
                                                                occurences 
                      8. string.charAt(Index) --gives the character for the given index
                                    

                      




*/

let str1 = "Karan Yadav";
console.log(str1);
console.log(str1.length);
console.log(str1[2]);


// Template literals
let obj1={
    Name : 'Karan Yadav',
    rollno : 11136 
}
console.log("The Student name is " , obj1.Name , "and the Roll No. is " , obj1.rollno);

let output = `The Student name is ${obj1.Name} and the Roll No. is ${obj1.rollno}`;   // template literals by ``
console.log(output);


//Escape Characters
let str2 = "Karan Yadav \n  Loves Deepika";  //    \n acts as single space/memory
console.log(str2);
console.log(str2.length);



//Methods in Strings

let string1 = "Karan Yadav loves Deepika Padukone";
let string2 = "          and Alia Bhatt              "

let result1 = string1.toUpperCase();                   // change is not done in actual value of the string .
                                                       // we have to store the changed string in another varaible 
let result2 = string1.toLowerCase();
let result3  = string2.trim();
let result4 = string1.slice(6 , 26);
let result5 = string1.concat(string2);
let result6 = string1.replaceAll("a" , "b");
let result7 = string1.charAt(4);


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

 
// Practice

let input = prompt("Enter your Full Name without spaces ");
let lengthOfInput = input.length;
let username = "@" + input + lengthOfInput;
console.log("Your username is : ", username );






















