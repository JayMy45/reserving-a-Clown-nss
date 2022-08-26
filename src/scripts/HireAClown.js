//import in needed formulas to build html...
import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"


export const HireAClown = () => {
    return `
    
<section  class="serviceFor">
        ${ServiceForm()}
</section>

<section class="serviceRequests">
    <h2>Service Requests</h2>
       ${Requests()}
</section>
    `
}