//declare/define applications state with both requests and completions arrays [empty] to hold/save state of applications
//fetch information from API/database.json file via fetchFunctions.
//Post information to server/database.json file using send functions.

const mainContainer = document.querySelector("#container") //added so that sendRequest would work...will have to observe how it works!

const applicationState = {
    requests: [],
    completions: []
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
    // * returns the new information form the updated database.json and re-renders html using stateChanged eventListener.
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}