//in order to print request to page after serviceForm is completed will need to update Request Module
//This module will update page with information from serviceForm by accessing the information stored in the requests: key of the json database.
//first we will need to import needed getter functions to access the database
//next a html conversion function will be defined to generate the necessary html output with a parameter to accept reservations/request in realtime...



//import getter functions...
import { getRequests } from "./dataAccess.js"


//build html with this function to be called upon later...parameter will be passed through function when called to export request outputs
const convertRequestToListElement = (request) => {

    let html = `<div class="reservationList>
    <li class=""> 
    A new reservation has been submitted for ${request.childName} by ${request.parentName}.
    </li> 
    </div>`

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