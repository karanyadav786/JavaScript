/*                                             SYNCHRONOUS PROGRAMMING

            -- the code runs in the sequence of instructions in the given program
            -- each line of instructions will wait for the completion of previous line of instruction


                                               ASYNCHRONOUS PROGRAMMING

            -- due to synchronous programming , sometimes the important instruction have to wait for a long time due to previous instruction to be executed completely
            -- asynchronous allows to run the next line of instruction , although the previous line of instruction
              not to be executed completely 
            -- asynchronous is done with use of setTimeOut

*/

// Example of Asynchronous Programming
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");

setTimeout(()=>{        // setTimeout particular time baad output show karega,but the next instruction run ho jayega
    console.log("Five !!!! After 1 sec");
} , 1000);

console.log("Six");
console.log("Seven");
console.log("Eight");
console.log("Nine");




/*                                             CALLBACK HELL

                   -- CallBacks : A function passed as an argument to another function
                   
                   -- CallBacks Hell : nested callback (callback ke andar callback)
                                     : forms a pyramid structure
                                     : this style of programming becomes difficult to understand and manage


*/

function printId(myId ){
    setTimeout(()=>{
        console.log(myId);  
    } , 2000)
}
printId("karan_d_yadav");
printId("Karanyadav@2004");


// If we want ki first username appears and then after some delay the password appears -- we use CALLBACKS HELL
function printData(data , getNextData)
{
       setTimeout( ()=>{
                        console.log("Data : " , data);
                        if(getNextData)
                        {
                            getNextData();       
                        }
                       },
                   1000
                 )
}
// CALLBACK HELL 
printData("1001",()=>{
                console.log("Getting data 1002 !!!!!!!!!!! ");
                printData("1002",()=>{
                                 console.log("Getting data 1003 !!!!!!!!!!! ");
                                 printData("1003",()=>{
                                                  console.log("Getting data 1004 !!!!!!!!!!! ");
                                                  printData("1004",()=>{
                                                                  console.log("Getting data 1005 !!!!!!!!!!! ");
                                                                  printData("1005",()=>{
                                                                                 console.log("Getting data 1006 !!!!!!!!!!! ");
                                                                                 printData("1006" ,()=>{
                                                                                                console.log("Getting data 1007 !!!!!!!!!!! ");
                                                                                                 printData("1007")
                                                                                                       }
                                                                                           )
                                                                                         }
                                                                            )
                                                                       }
                                                            )
                                                       }
                                          )               
                                     }
                        )
                    }
)








/*                                            PROMISES
         
                 -- Eventually completion of task i.e. task ya to pura hoga ya to nahi hoga
                 -- solve the problem of complexity in Callbacks Hell
                 -- Promises are Objects in JS
                 -- resolve and reject are two callbacks provided by Js

                 --Promises have 3 states
                 1.Pending   -- the result is undefined
                 2.Resolve   -- the result is with some value
                 3.Reject    -- the result is with some error
                 
                 -- then() and catch() uses
                 promise.then( (res)=>{ ---- })  : if promise will get resolved , to hi .then() execute hoga
                 promise.catch( (err)=>{ ---- })  :if promise will get rejected , to hi .catch() execute hoga


*/


let promise_1 = new Promise( (resolve , reject) => {
                                                console.log("Woodland Shoes to be delivered ");
                                                    }  
                      )
let promise_2 = new Promise( (resolve , reject) => {
                                                console.log("Woodland Shoes to be delivered ");
                                                resolve("Succesfully Delivered");
                                                    }  
                         )
let promise_3 = new Promise( (resolve , reject) => {
                                                console.log("Woodland Shoes to be delivered ");
                                                reject("Deliverey Cancelled And Paisa will be Refunded;")
                                                    }  
                         )
console.log(promise_1);
console.log(promise_2);
console.log(promise_3);



// then() and catch() 
const getPromise = ()=>{
                       return new Promise( (resolve,reject)=>{
                                    console.log("I am a Promise for getting the delivery from flipcart service");
                                    resolve("The delivery is successfully Completed");
                                                             }
                                         );
};
let promise = getPromise();
promise.then( (res)=>{
                   console.log("Successfully Delivered" , res);
                     }
            )
promise.catch( (err)=>{
                   console.log("Error Occurred" , err);
                     }
            )


// PROMISE CHAIN -- solution of the problem of Callbacks Hell
function getData(dataId){
               return new Promise( (resolve,reject)=>{
                                                 setTimeout( ()=>{
                                                                console.log(dataId);
                                                                resolve("Successfully Fetched the data");
                                                                 },
                                                                7000 
                                                             )
                                                      }
                                );
}
//Promise chain (Another way)
// getData(7001).then( (res)=>{
//                          console.log(res);
                        
//                          getData(7002).then((res)=>{
//                                                 console.log(res);
                                                
//                                                 getData(7003).then((res)=>{
//                                                                         console.log(res);
//                                                                             }
//                                                                      )
//                                                     }
//                                          )
//                               }
//                   )

// Promise chain                   
getData(7001)
    .then( (res)=>{
        console.log(res);
        return getData(7002);
    })
    .then( (res)=>{
        console.log(res);
        return getData(7003);
    })
    .then( (res)=>{
        console.log(res);
        return getData(7004);
    })
    .then( (res)=>{
        console.log(res);
        return getData(7005);
    })
    .then( (res)=>{
        console.log(res);
        return getData(7006);
    })
    .then( (res)=>{
        console.log(res);
        return getData(7007);
    })







    /*                                         ASYNC - AWAIT
                    
                     -- Async-Await is the : Solution to the Problem of Promises Chain
                     -- async function always return a promises
                     -- await always used under async function
                     -- await pauses the execution of its surroudings async function until the promise is settled

    */

     /*                               IIFE : Immediately Invoked Function Expression
     
                     -- IIFE is a function which is invoked immediately as soon as it is defined
     */

// ASYNC-AWAIT -- solution of the problem of Promise Chain / Callbacks Hell
function printId(uid){
    return new Promise( (resolve,reject)=>{
                                      setTimeout( ()=>{
                                                     console.log(uid);
                                                     resolve("Successfully Fetched the UID");
                                                      },
                                                     2000 
                                                  )
                                           }
                        )
                    }

async function print_data_1by1(){
                     await printId(11136);          // Jab tak complete nhi hoga koi aur execute nhi ho sakega
                     await printId(15365);  
                     await printId(11093);
                     await printId(10072);
                     await printId(12921);
                     await printId(10293);
}
print_data_1by1();                                 // Calling the function for execution 


                  