//declare/define applications state with both requests and completions arrays [empty] to hold/save state of applications
//fetch information from API/database.json file via fetchFunctions.
//Post information to server/database.json file using send functions.

const mainContainer = document.querySelector("#container") //added so that sendRequest would work...will have to observe how it works!

const applicationState = {
    requests: [],
    completions: [],
    clowns: []
}


// 
const API = "http://localhost:8088"  //api is equal to the local host that is active in Terminal.  This is where Json will look for the database.


// & REQUESTS
//? - fetchRequest function will access requests located in API then store it in applicationState function above with the key of request:   .
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// * saveRequest will take userInputs supplied in userRequest parameter and POST it to Server/database.json file. Then dispatch the stateChange to the main.js file to re-render the html with updated information.
export const saveRequest = (userRequest) => {
    const fetchOptions = {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRequest)
    }
    // * returns the new information from the updated database.json and re-renders html using stateChanged eventListener.
    return fetch(`${API}/requests`, fetchOptions) //access API Request key in database.json
        .then(response => response.json()) //creates a promise for database to be used 
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))  //this line needed to re-render the new state into HTML...clearing the forms of information.
        })
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

// ?denyRequest...
//this function provide functionality to the deny button 
export const denyRequest = (id) => {  //id passed from function (imported) when invoked
    return fetch(`${API}/requests/${id}`, { method: "DELETE" }) //the method is to revise the database by deleting whichever item id matches
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) //the page will be re-rendered after the process is complete.
        })
}

// &       CLOWNS
//declare fetch function to access clowns: in database.json
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clown) => {
                applicationState.clowns = clown
            }
        )
}
//create getter function to provide copy of clowns key to other modules.
export const getClowns = () => {
    return structuredClone(applicationState.clowns)
}

//&       COMPLETIONS
//create save function using fetch() method POST
export const saveCompletions = (reservationCompletion) => {
    const fetchOptions = {
        method: "POST",  //post information generated to API
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationCompletion)  //stringify convert javascript to json so information can added to json file.
    }
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))  //this return updates the website by using the customChngeEvent to re-render the page whenever save is initiated.
        })
}


//also need access to the completion information from the updated API therefore need to declare a fetch to fetchCompletion to export ot main.js (wherever needed)
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }

        )
}

//declare getter function to make a copy of the completion key in applicationState objectArray above.
export const getCompletions = () => {
    return structuredClone(applicationState.completions)
}