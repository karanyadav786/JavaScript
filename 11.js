/*                                          FETCH  API
 
                  -- API : Application Programming Interface
                  -- Fetch API provides the interface to fetch the resources 
                  -- Uses two objects : 
                  1.Request
                  2.Response
                  -- fetch() method is used to fetch a data

                  -- let promise = fetch( url , [options]);
*/


/*                                               AJAX & JSON

           -- AJAX : Asynchronous Javascript and XML

           -- JSON : Java Script Object Notation 

           -- json() method converts the fetched data from API with JSON text format to the --- Java script object
                                                                                                 format
            
           -- HTTP : Hyper Text Tranfer Protocol : set of rules for fetching the resources

           -- Response Status Code :indicates whether a specific HTTP request has been successfully completed or not
             1. Informational responses (100 – 199)
             2. Successful responses (200 – 299)
             3. Redirection messages (300 – 399)
             4. Client error responses (400 – 499)
             5. Server error responses (500 – 599)

             * 404 : File Not Found Error -- most seen error in our daily life especially in chrome 

                                                                                                 
*/

const URL = "https://dogapi.dog/api/v2/breeds";
let btn = document.querySelector("#btn");
let factPara = document.querySelector("#fact");

const getFacts = async ()=>{
                           console.log("Fetching the data from other API .......");
                           let response = await fetch(URL);
                           console.log(response);        // Fetch Data in JSON format
                           console.log(response.status); // to check whether successfull fetching is done or not

                            let data = await response.json();
                            console.log(data);           // Fetch data in JS object format

                            console.log(data.data[7].attributes.description);
                            factPara.innerText = data.data[7].attributes.description; 
};

btn.addEventListener("click" , getFacts);       // when we click the button , then function will be invoked




