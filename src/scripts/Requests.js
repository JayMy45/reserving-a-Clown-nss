//in order to print request to page after serviceForm is completed will need to update Request Module
//This module will update page with information from serviceForm by accessing the information stored in the requests: key of the json database.
//first we will need to import needed getter functions to access the database
//next a html conversion function will be defined to generate the necessary html output with a parameter to accept reservations/request in realtime...



//import getter functions...
import { getRequests, denyRequest, getClowns } from "./dataAccess.js"

const mainContainer = document.querySelector("#container") //is this needed to so click addEvent for deleteRequest...

//eventListener that listens for class tag starting with request-- to be clicked then invokes denyRequest button with whatever id is clicked to be removed from the database through denyRequest function located on dataAccess.
mainContainer.addEventListener("click", click => {  //click listener for delete button...
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        denyRequest(parseInt(requestId))
    }
})


//eventListener responds to change in state of dropBox if a choice is made then it will invoke the creation of completion object to be saved in database.json
mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "clowns") {
        const [resoId, clownId] = event.target.value.split("--")

        const completion = {
            resoId: parseInt(resoId),
            clownId: parseInt(clownId),
            date_created: Date.now()
        }
        saveCompletion(completion)
    }
})

//build html with this function to be called upon later...parameter will be passed through function when called to export request outputs
const convertRequestToListElement = (request) => {

    let clowns = getClowns()

    //add dropbox to html to display choice of clown.
    //add fetch() function to dataAccess to import the clowns...
    let html = `
    <div class="reservationList>
        <li class=""> 
            A new reservation has been submitted for ${request.childName} by ${request.parentName}.
        </li> 
        <select class="clowns" id="clowns"> 
            <option value="">Choose</option>
                ${clowns.map(
        clown => {
            return `<option value="${clown.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
        </select>

        <button class="button" id = "request--${request.id}"> Deny</button>

     </div>`

    //add button to deny 
    return html
}


//export Request function to return html to HireAClown.js
export const Requests = () => {

    const requests = getRequests()

    let html = `
    <ul class="no-bullets">
        ${requests.map(convertRequestToListElement).join("")}
    </ul>`


    return html
}