//import in needed formulas to build html...
import { ServiceForm } from "./ServiceForm.js"


export const HireAClown = () => {
    return `
    <h1>Hire A Clown</h1>
    
<section class="serviceForm">
        ${ServiceForm()}
</section>

<section class="serviceRequests">
    <h2>Service Requests</h2>
       
</section>
    `
}