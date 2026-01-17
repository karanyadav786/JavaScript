/*                                              ARRAYS 

                    -- Array is a collection of items of same and different data types 
                    -- Array is mutable 

                    -- Array Methods:

                    A) Changed in original array 
                      1. push() : to add the element to the last
                      2. unshift() : to add the element to the front 
                      3. pop() : to delete and return the element from the last
                      4. shift() : to delete and return  the element from the front 

                      5. splice(start Index , delete Count , New Element 1......new Element n ) : 
                                                 --change the original array  
                                                 -- add the element at any position 
                                                 -- delete the element at any position 
                                                 -- replace the element at any position 


                    B) No changed in  Original Array But gives the new array 
                      1. array.toString() : converts the array into string 
                      2. concat   : join multiple array
                      3. slice(start Index , Ending Index(not included)) : give the part of the array   


*/

let arr1 = [23,34,23,54,65,43];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1.length);
console.log(typeof arr1);        // datatype of array is object  

arr1[2]= 786;                   // the change is done in actual array because array is mutable 
console.log(arr1);




// Looping over an array : Print all the elements of the array 

let states = ["Punjab", "Himachal Pradesh", "Maharashtra", "Goa", "Bihar"];

// For loop 
for(let i=0 ; i < states.length ; i++)
{
    console.log(states[i]);
}

// For of loop
for(let state of states)
{
    console.log(state);
    console.log(state.toUpperCase());
}






// Practice 

let marks = [10,20,30,40,50,60,70,80,90,100];
let sum=0;
for(let i = 0 ; i<marks.length ; i++)
{
    sum = sum + marks[i];
}

let average_marks = sum / marks.length;
console.log("The average marks of the numbers are " , average_marks);


// Practice

let price = [232,343,346,987,986,577,788,786];
for(let i=0 ; i<price.length ; i++)
{
    let offer = price[i]/10;
    price[i] = price[i] - offer ;
}

for(let price_after_offer of price)
{
    console.log("The price after offer : " , price_after_offer);
}





//PUSH 
let food = ["potato" , "onion", "tomato", "brinjal"];
console.log(food);
food.push("garlic", "ladyfinger");
console.log(food);

// POP 
let food1 = ["potato" , "onion", "tomato", "brinjal"];
console.log(food1);
let deleted_food = food1.pop();
console.log(food1);
console.log(deleted_food);

// toString
console.log(food.toString());

//concat
let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
let result = num1.concat(num2);
console.log(result);

// slice
let arr3= [0,1,2,3,4,5,6,7,8,9,10];
let partOfArray = arr3.slice(1,8);
console.log(partOfArray);

//splice
let arr4 = [2,4,6,8,10,12,14,16,18,20];
arr4.splice(2,4,1,1,1,1,1,1,1,1,1,1,1);
console.log(arr4);


let arr5 = [0,1,2,3,4,5,6,7,8,9,10];
arr5.splice(7,1,"Karan");           // deleted the value at 7th index and add the new value at 7th index
console.log(arr5);


// Practice

let companies = ["Bloomberg", "Microsoft" , "Uber", "Google" , "IBM ", "Netflix"];

deleted_company = companies.shift();
console.log(deleted_company);

companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);









