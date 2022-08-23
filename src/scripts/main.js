import { fetchRequests } from "./dataAccess.js";

export const mainContainer = document.querySelector("#container");

const render = () => {
    fetchRequests()
        .then(() => {
            mainContainer.innerHTML = HireAClown()
        }
        )
}

render()