import { saveRequest } from "./dataAccess.js"

//this module will be used to build HTML code that will provide the fillable form for users to interact with...
//eventListener below whenever submitReservation (button) is clicked will define update the defined variables with userInputs.
const mainContainer = document.querySelector("#container")  //This provides access to the container id ("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='userParentName']").value //these values will be updated with user inputs and provided to dataToSendToApi variable...
        const userChildName = document.querySelector("input[name='userChildName']").value
        const userPartySize = document.querySelector("input[name='userPartySize']").value
        const userAddress = document.querySelector("input[name='userAddress']").value
        const userDuration = document.querySelector("input[name='userDuration']").value
        const serviceDate = document.querySelector("input[name='serviceDate']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,  //These variables are whatever the userInputs were.
            childName: userChildName,
            partySize: userPartySize,
            address: userAddress,
            duration: userDuration,
            neededBy: serviceDate
        }

        // Send the data to the API for permanent storage
        saveRequest(dataToSendToAPI) //dataToSenToAPI now contains all userInputs and provided in saveRequest to POST and re-render Website.
    }
})


//create export function to build html buttons and panes...
export const ServiceForm = () => {
    let html = ` <section class="serviceForm">
    <div>
    <h3>Reserve a spot here</h3>
    </div>
        <div class="field">
            <label class="label" for="userParentName">Parent Name</label>
            <input type="text" name="userParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userChildName">Child Name</label>
            <input type="text" name="userChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userPartySize">Party Size</label>
            <input type="number" name="userPartySize" class="input" />
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
        </section>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

