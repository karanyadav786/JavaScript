/*                                                  EVENTS 

             -- the change in the state of the object is known as event
             -- eg of events :
             1. Mouse events -- click , double click
             2. keyboard events -- press
             3. form events -- submit the form 


                                            EVENTS HANDLING IN JAVASCRIPT

                -- if we apply the same event handling in  HTML (inline) and in  JS 
                   the event handling in jS  will be occured

                                                
                                                   EVENT OBJECT 

                -- event object stores the details of the event


                                                EVENT LISTENERS 

                -- mutliple event handling  is done for single event  
                -- node.addEventListener(event , callback function)  
*/

let button_1 = document.querySelector("#one");
button_1.ondblclick = () => {
    console.log("The button is clicked two times ");
    alert("The button is clicked two times");
}


let div_1 = document.querySelector("#two");
div_1.onmouseover = () => {
    console.log("you are inside the div  ");
    alert("you are inside the div");
}


let button_2 = document.querySelector("#three");
button_2.onclick = (event_obj) => {
    console.log(event_obj);
    console.log(event_obj.type);
    console.log(event_obj.target);

    
}

let button_3 = document.querySelector("#four");

button_3.addEventListener("click", () => {             // Handler 1 
    console.log("HANDLER 1 ");
    alert("Handler 1");
});
button_3.addEventListener("click", () => {             // Handler 2
    console.log("HANDLER 2 ");
    alert("Handler 2");
});



// Practice : Create a toggle (Switching between two states) button that changes the screen to dark mode when clicked and light mode when clicked again

// let button_4 = document.querySelector("#five");
// let body = document.querySelector("body");
// let currMode = "light";
// button_4.addEventListener("click", () => {
//     if (currMode === "light")
//     {
//         currMode = "dark";
//         console.log(currMode);
//         body.style.backgroundColor = "black";
//     }
//     else
//     {
//         currMode ="light";
//         console.log(currMode);
//         body.style.backgroundColor = "white";
//     }

// })


// With using CLASSLIST means using CSS file

let button_4 = document.querySelector("#five");
let body = document.querySelector("body");
let currMode = "light";
button_4.addEventListener("click", () => {
    if (currMode === "light")
    {
        currMode = "dark";
        console.log(currMode);
        body.classList.add("dark");                 // using class which is available in CSS file
        body.classList.remove("light");              // remove class 
    }
    else
    {
        currMode ="light";
        console.log(currMode);
        body.classList.add("light");                  // using class which is available in CSS file
        body.classList.remove("dark");                 // remove class 

    }

})