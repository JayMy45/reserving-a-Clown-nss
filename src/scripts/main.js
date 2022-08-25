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


//This function re-renders html whenever a stateChanged eventListener is activated
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)