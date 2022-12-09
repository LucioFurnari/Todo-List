import { createTask } from "./classes";
import { taskArray } from "./classes";
import { createTaskUi } from "./ui";

export function addEvents(){
    const testButton = document.querySelector(".testButton");
    const main = document.querySelector(".todo-section");
    const nameInput = document.querySelector(".nameInput")
    const dateInput = document.querySelector(".dateInput")
    const descriptionArea = document.querySelector(".descriptionArea")
    testButton.addEventListener("click",(e) => {
        e.preventDefault()
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
        createTask(nameInput.value,dateInput.value,descriptionArea.value);
        taskArray.forEach(elem => {
            main.append(createTaskUi(elem))
        })
    })
}