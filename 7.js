 /*                                             DOM  MANIPULATION 
  
                  ATTRIBUTES 
                  1. getAttribute("attr") -- to get the attribute value 
                  2. setAttribute("attr" ,"value" )-- to set the new value of the attribute

                  STYLE 
                  1. node.style  -- returns the inline styling of the HTML 
                                 -- we can change the styling in JS also

                  INSERT ELEMENTS
                  --Firstly we have to create the element , and then add on different position 

                    let el = document.createElement("div");
                 1. node.append(el) -- adds at the END of the node (INSIDE) 
                 2. node.prepend(el) --adds at the STARTING of the node (INSIDE) 
                 3. node.before(el) --adds at the STARTING of the node (OUTSIDE) 
                 4. node.after(el) --adds at the END  of the node (OUTSIDE) 

                  DELETE ELEMENT
                 1. node.remove() -- to delete the node 

 */

alert("hello Karan Yadav ");


let a = document.querySelector("#one");
console.log(a.getAttribute("id"));
console.log(a.getAttribute("name"));


let b = document.querySelector("h2");
b.setAttribute("name", "goodName");


let c = document.querySelector("#two");
console.dir(c.style);
c.style.backgroundColor = "red";
c.style.fontSize ="30px";
c.style.border="2px solid brown";


// INSERT ELEMENTS 
let d =document.querySelector("#three");

let new_el_1 = document.createElement("button");
new_el_1.innerText ="PREPEND";
d.prepend(new_el_1);

let new_el_2 = document.createElement("button");
new_el_2.innerText ="APPEND";
d.append(new_el_2);

let new_el_3 = document.createElement("button");
new_el_3.innerText ="BEFORE";
d.before(new_el_3);

let new_el_4 = document.createElement("button");
new_el_4.innerText ="AFTER";
d.after(new_el_4);

// DELETE ELEMENT
let e=document.querySelector("span");
e.remove();





// PRACTICE 

let new_el_5 = document.createElement("button");
new_el_5.innerText ="Click me";
new_el_5.style.backgroundColor = "red";
new_el_5.style.color = "white";

document.querySelector("body").prepend(new_el_5);






