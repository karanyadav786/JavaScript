// Accessing the elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

//player 0 turn
let turn0 = true; 

// Playing the Game 
boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        console.log("Box was clicked");
        if(turn0)
        {
            box.innerText ="0";           // player 0
            turn0 =false;
        }
        else
        {
            box.innerText ="X";           // player X
            turn0 =true;
        }
        box.disabled = true;
        checkWinner();
    
    });
});

// winner patterns (using 2D array)
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// checking Winner using winning conditions (using function )
const checkWinner = ()=>{
    for(let pattern of winPatterns)
    {                                                               // saare patterns baari baari aayenge
        let pos_1_value = boxes[pattern[0]].innerText;
        let pos_2_value = boxes[pattern[1]].innerText;
        let pos_3_value = boxes[pattern[2]].innerText;
    
    if(pos_1_value !== "" && pos_2_value !== "" && pos_3_value !== "" )
    {
        if(pos_1_value === pos_2_value  && pos_2_value === pos_3_value)
        {
            console.log("WINNER " , pos_1_value);
            showWinner(pos_1_value);
            return;
        }
    }   
}
};

// showing winner on webpage 
const showWinner = (winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disbtn();

};

// disabled button/ boxes after winning the match 
const disbtn =()=>{
    for(let box of boxes)
    {
        box.disabled = true ;
    }
};

// If anybody RESET the game 
const reset = ()=>{
    turn0 =true;
    enbtn();
    msgContainer.classList.add("hide");

};

// enabled button/ boxes after RESET or NEW GAME 
const enbtn =()=>{
    for(let box of boxes)
    {
        box.disabled = false ;
        box.innerText ="";
    }
};

// The new game start if we click the New Game / Reset Game
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);





