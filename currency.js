const BASE_URL="https://v6.exchangerate-api.com/v6/abb6a275439bc0a1d505470a";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



// To show all the currencies code of the world in the dropdown in HTML using another file - codes.js
for(let select of dropdowns){                          
         for(let currCode in countryList){              // available in another file - codes.js
              let newOption = document.createElement("option");
              newOption.innerText = currCode;
              newOption.value = currCode;

              if(select.name==="from" && currCode==="USD"){ //used for default selected value for currency dropdowns
                newOption.selected ="selected";
              }
              else if(select.name ==="to" && currCode==="INR"){
                newOption.selected ="selected";
              }
              select.append(newOption);
         }
         select.addEventListener("change" , (evt)=>{
                        updateFlag(evt.target);
         });
}

// Flag Changing : When we change the Currency code , the flag of that country also have to be changed
const updateFlag =(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;   //for every country code,the flag image
                                                                     // will be different.            
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;                                       // change the old img src to the new img src
};



// Working Of Exchange Rate Button : When we click the button of Exchange Rate ,the money will be changed from one country currency value to another country currency value
 
btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault();              // when we click the button , jo refresh hokar form aata hai , wo nahi aayega
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if(amtVal === "" || amtVal < 1){   //If we enter empty or negative value ,then automatically ye value=1 le lega 
        amtVal = 1;                 // the value of amount will be 1 ,used for calculation purpose in JS logic built
        amount.value = "1";         // for showing in HTML , not for calculation purpose
    }

    const URL = `${BASE_URL}/latest/${fromCurr.value}`;  // Valid link for fetching the data from the others API 
    let response = await fetch(URL);       //fetch(URL) sends a request to get currency exchange rates
    let data = await response.json();     // converts the JSON format into  JavaScript object


    let rate= data.conversion_rates[toCurr.value];//data ke andar conversion_rates contains exchange rates for all 
                                                  // currencies
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
                                           // toFixed(2) - means decimal ke baad only 2 digits honge round off hokar
    
});





/*                                                     THANKS 
 
                                                 END OF JAVASCRIPT  

                                    1.Anara Devi
                                    2.Shiv Kumari
                                    3.Meena Kumari
                                    4.Raj Kumari
                                    5.Suresh Kumari
                                    6.Priyanka
                                    7.Karan
                                    8.Vishal
                                    9.Ajay
                                    10.Tarun
                                    11.Jagat
                                    12.Krishav
                                    13.Ayesha
                                    14.Paridhi
                                    15.Amayra

*/














