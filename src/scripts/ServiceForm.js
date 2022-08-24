// import { sendRequest } from "./dataAccess.js"

//this module will be used to build HTML code that will provide the fillable form for users to interact with...
//copy/pasted from workBook
const mainContainer = document.querySelector("#container")  //This provides access to the container id ("#container")

// mainContainer.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "submitRequest") {
//         // Get what the user typed into the form fields
//         const userParentName = document.querySelector("input[name='userParentName']").value
//         const userChildName = document.querySelector("input[name='userChildName']").value
//         const userPartySize = document.querySelector("input[name='userPartySize']").value
//         const userAddress = document.querySelector("input[name='userAddress']").value
//         const userDuration = document.querySelector("input[name='userDuration']").value
//         const serviceDate = document.querySelector("input[name='serviceDate']").value
//         const userDescription = document.querySelector("input[name='userDescription']").value

//         // Make an object out of the user input
//         const dataToSendToAPI = {
//             parentName: userParentName,
//             childName: userChildName,
//             partySize: userPartySize,
//             address: userAddress,
//             duration: userDuration,
//             neededBy: serviceDate,
//             description: userDescription,
//         }

//         // Send the data to the API for permanent storage
//         sendRequest(dataToSendToAPI)
//     }
// })


//create export function to build html buttons and panes...
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="userParentName">Parent Name</label>
            <input type="text" name="userParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userChildName">Child Name</label>
            <input type="text" name="userChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partySize">Party Size</label>
            <input type="number" name="partySize" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userAddress">Address</label>
            <input type="text" name="userAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userDuration">Duration of Party</label>
            <input type="number" name="userDuration" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

