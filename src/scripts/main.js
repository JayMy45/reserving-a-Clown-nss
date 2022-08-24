import { fetchRequests } from "./dataAccess.js";
import { HireAClown } from "./HireAClown.js";

export const mainContainer = document.querySelector("#container");

const render = () => {
    fetchRequests()
        .then(
            () => {
                mainContainer.innerHTML = HireAClown()
            }
        )
}

render()