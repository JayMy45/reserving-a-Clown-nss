const mainContainer = document.querySelector("#container") //added so that sendRequest would work...will have to observe how it works!

const applicationState = {
    requests: [],
    completions: []
}


// 
const API = "http://localhost:8088"  //api is equal to the local host that is active in Terminal.  This is where Json will look for the database.

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