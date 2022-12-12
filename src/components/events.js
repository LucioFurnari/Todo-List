import { createTask } from "./classes";
import { taskArray } from "./classes";
import { createTaskUi } from "./ui";

export function addEvents(){
    const addTaskButton = document.querySelector(".addTaskButton");
    const main = document.querySelector(".tasks-container");
    const taskForm = document.querySelector(".taskForm");
    
    addTaskButton.addEventListener("click",() => {
        taskForm.classList.add("active")
        
    })

    taskForm.addEventListener("submit",(e) => {
        e.preventDefault();
        const nameInput = document.querySelector(".nameInput");
        const dateInput = document.querySelector(".dateInput");
        const descriptionArea = document.querySelector(".descriptionArea");
        const priorityInput = document.querySelector(".taskForm input[name = priority]:checked")
        
        console.log(priorityInput.value);
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
        createTask(nameInput.value,dateInput.value,descriptionArea.value,priorityInput.value);
        taskArray.forEach(elem => {
            main.append(createTaskUi(elem))
        })
        taskForm.classList.remove("active");
    })
}