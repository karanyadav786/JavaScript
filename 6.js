/*                                               WINDOW OBJECT 
            
                     -- Window object is a browser object not  javascript's
                     -- automatically created by the browser / chrome when we open the browser
                     -- Global object with lots of properties and functions contained  in it
                     -- javascript knows the window object , so we do not have to write the window keyword  for 
                        accessing its functions and properties
                     -- console , alert , prompt, log etc all are the functions and properties of the WINDOW OBJECT 
*/
window.console.log("Karan Yadav");      // same meaning as console.log("Karan Yadav");  
window.alert("hello ! , Karan Yadav");
console.log(window);                    // print all the properties and function inside the window object





/*                                      DOM - DOCUMENT  OBJECT  MODEL 

                -- when webpage is loaded , browser creates a DOM of the HTML inside the WINDOW OBJECT 
                -- DOM is created for accessing the HTML tags in Javascript 
                -- why HTML tags in JS ? -- to change anything during the runtime /dynamically
                                         -- change is not done permanently 
                -- HTML file ka DOCUMENT ban jaata hai Javascript mai , jo ek object ke form mai hota hai 

                -- console.log -- to print the code of document or other object 
                -- console.dir -- to print the Properties and functions of the document or other object 
*/

console.log(window.document);
console.dir(window.document);

// window.document.body.childNodes[1].innerText = "Karan loves deepika";   // when we load the page , it changes 
                                                                        // dynamically 






/*                                             DOM MANIPULATION

                    SELECTING THE ELEMENT

                     -- how can we ACCESS the particular element which we have to change dynamically in JS
                     
                     1. Selecting with ID : document.getElementById("id_name");

                     2. Selecting with class : document.getElementsByClassName("class_name");
                                             -- gives as HTML collections(contain all the elements with same class name) like an array

                     3. Selecting with tags : document.getElementsByTagName("tag_name");
                                             -- gives as HTML collections(contain all the elements with same tag )-- stores like an array

                      4. Query Selector   : document.querySelector(" class_name / Id_name / tag ");
                                             -- return only 1st element 

                      5. Query Selector   : document.querySelectorAll(" class_name / Id_name / tag ");
                                             -- return all the elements
                                             -- return in the form of NodeList
                                             -- we have to do id start with #
                                                              class start with .


                   PROPERTIES IN DOM MANIPULATION

                      1. tagName : returns the tag name of the element
                      2. innerText : return the text part of the element and its children text also
                      3. innerHTML : return the text part of the element +  HTML tag content of its children
                      4. textContent : returns the text part of the hidden elements

*/
let a = document.getElementById("one");
console.log(a);
console.dir(a);

let b = document.getElementsByClassName("same_class");
console.log(b);
console.dir(b);

let c = document.getElementsByTagName("div");
console.log(c);
console.dir(c);

let d = document.querySelector("div");
console.log(d);
console.dir(d);

let e = document.querySelectorAll("div");
console.log(e);
console.dir(e);

let f = document.querySelector("#two");
console.log(f);
console.dir(f);


console.log(a.tagName);      // returns the tag name 
console.log(f.innerText);
console.log(f.innerHTML);


// some dynamically changes 
let g = document.querySelector("#three");
g.innerHTML = "<i> this is NEW paragraph </i>";

 
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New Div 1 ";
// divs[1].innerText = "New Div 2 ";
// divs[2].innerText = "New Div 3 ";
// divs[3].innerText = "New Div 4 ";
// divs[4].innerText = "New Div 5 ";
let i=1; 
for(div of divs){
   div.innerText =`New Div ${i} `;
   i++;
}
















                                                                     

                     

