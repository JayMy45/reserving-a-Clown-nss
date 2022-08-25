/*In this project we are making a webpage that will fetch data from an json database "located locally in and API folder" to make a site
that has the capability to:
        - create new reservations
                -listed in chronological order
                *-closest date first-*

        - delete reservations from the website
*/

// ^This is to create Reserve button...

//need to build this out in the main.js, ServiceForm.js and dataAccess.js modules. ("maybe more modules need to be included to get things working.  Will update.")

// 1. Build HTML that contains input fields for all information needed to reserve a clown for a birthday (information needed below).
/*
        parentName: userParentName,
         childName: userChildName,
         partySize: userPartySize,
           address: userAddress,
          duration: userDuration,
          neededBy: serviceDate,
         description: userDescription,
*/
// 2. create function in dataAccess module to post a reservation state object to API to be saved in permanent storage

//3. Create event Listener to 
/*
  ?  - collect user input
  ?  - construct a state object for reservation
  ?  - pass it to function defined as an argument.
*/

// ^This is to update html page with serviceForm information once a request is made...and maybe more.

// 1. write getter function for request..
// 2. import getter functions (initially for getting request) from dataAccess.js module.
// 3. asSeenOnSinkRepair Project...create a function to get requests 
// 4. then provide the response information to convertRequestToListElement function to be placed in html code.


//^create a button to delete reservations

/* 
    1. create button in html with id should contain primary keys for request (requestId or request.id?).
    2. add a click event listener to react to button being clicked.
    3. create export function in data access module
        - contain a fetch() call to request from API 
        -use DELETE method
        - specify the id of the reservation to be deleted.
 */
