//in order to print request to page after serviceForm is completed will need to update Request Module
//This module will update page with information from serviceForm.

//import getter functions...
import { getRequests } from "./dataAccess.js"


//build html with this function to be called upon later...
const convertRequestToListElement = (request) => {

    let html = `
    <li class=""> 
    ${request.childName}
    </li>`

    return html
}

//export Request function to return html to HireAClown.js
export const Requests = () => {

    const requests = getRequests()

    let html = `
    <ul class="no-bullets">
    ${requests.map(convertRequestToListElement)}.join("")
    </ul>`


    return html
}