import { createProject } from "./classes";
import { projectArray } from "./classes";
import { saveSelectedProject } from "./classes";
import { deleteProject } from "./classes";
import { deleteTask } from "./classes";
import { projectSelected } from "./classes";
import { createTask } from "./classes";
import { createTodo } from "./classes";
import { setLocalStorage } from "./classes";

export function createUI(){
    const root = document.querySelector("#content");
    root.append(navBar(),todoMenu(),todoSection())
}
/* <-------------------------------- Todo section ---------------------------------> */
function todoSection(){
    const section = document.createElement("div")
    section.classList.add("todo-section")

    const addTaskSection = document.createElement("div");
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container")

    const addTaskButton = document.createElement("img");
    addTaskButton.classList.add("addTaskButton")
    addTaskButton.src = "../src/images/plus.svg"
    addTaskButton.addEventListener("click",() => {
        const taskForm = document.querySelector(".taskForm");
        taskForm.classList.toggle("active")
    });

    addTaskSection.append(addTaskButton,taskForm())
    section.append(addTaskSection,tasksContainer)
    return section
}

/* <-------- Task Form --------> */
function taskForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("formContainer")
    const form = document.createElement("form");
    form.classList.add("taskForm");

    form.addEventListener("submit",(e) => {
        const main = document.querySelector(".tasks-container");
        e.stopImmediatePropagation()
        e.preventDefault();
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
        if(projectArray[projectSelected]){
            createTodo(createTask(nameInput.value,dateInput.value,descriptionArea.value,prioritySelector.value));
            projectArray[projectSelected].tasks.map((elem,i) => {
                main.append(createTaskUi(elem,i))
            })
            form.classList.remove("active");
        };
        setLocalStorage();
    },true)

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.required = true;
    nameInput.classList.add("nameInput");
    const descriptionArea = document.createElement("textarea")
    descriptionArea.classList.add("descriptionArea");
    const dateInput = document.createElement("input")
    dateInput.setAttribute("type","date");
    dateInput.classList.add("dateInput");
    dateInput.required = true;

    const prioritySelector = document.createElement("select");
    prioritySelector.classList.add("prioritySelector")
    const optionPriorityLow = document.createElement("option");
    optionPriorityLow.textContent = "Low";
    optionPriorityLow.value = "low";

    const optionPriorityMedium = document.createElement("option");
    optionPriorityMedium.textContent = "Medium";
    optionPriorityMedium.value = "medium";

    const optionPriorityHigh = document.createElement("option");
    optionPriorityHigh.textContent = "High";
    optionPriorityHigh.value = "high";

    prioritySelector.append(optionPriorityLow,optionPriorityMedium,optionPriorityHigh);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submitButton")
    submitButton.textContent = "Add"
    
    form.append(nameInput,descriptionArea,dateInput,prioritySelector,submitButton);
    formContainer.appendChild(form)
    return formContainer;
}

/* <---------------- Task UI ----------------> */

export function createTaskUi(elem,i){
    
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id",i);
    task.setAttribute("priority",elem.priority);


    const taskInfo = document.createElement("div")
    taskInfo.classList.add("taskInfo");
    taskInfo.addEventListener("click",() => taskContent.classList.toggle("taskContent-active"));

    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent")
    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox";
    checkboxInput.checked = elem.complete;
    const taskName = document.createElement("p");
    taskName.textContent = "Name: " + elem.name;
    const taskDate = document.createElement("p");
    taskDate.textContent = "Due Date: " + elem.date
    const taskDescription = document.createElement("p");
    taskDescription.textContent = "Description: " + elem.description;
    const taskPriority = document.createElement("p");
    taskPriority.textContent = "Priority: " + elem.priority;

    checkboxInput.addEventListener("click", (event) => {
        event.stopImmediatePropagation()
        elem.changeComplete(event.target.checked);
        setLocalStorage();
    })

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "Edit";
    editButton.addEventListener("click",(event) => {
        event.stopImmediatePropagation()
        taskContent.classList.remove("taskContent-active");
        taskEdit.classList.add("edit-active");
        taskInfo.classList.add("task-hide")
    })
    const deleteButton = document.createElement("button"); // Button for delete Task
    deleteButton.textContent = "DELETE"
    deleteButton.addEventListener("click",() => {
        const mainContainer = document.querySelector(".tasks-container");
        deleteTask(i);
        resetUiContainer(mainContainer,projectSelected,projectArray);
        setLocalStorage();
    });
    taskContent.append(taskDate,taskDescription,)
    taskInfo.append(checkboxInput,taskName,taskPriority,editButton,deleteButton);

    /*------ Edit Form ------*/

    const taskEdit = document.createElement("form");
    taskEdit.classList.add("taskEdit");

    const editName = document.createElement("input");
    editName.value = elem.name;
    const editDate = document.createElement("input");
    editDate.setAttribute("type","date");
    editDate.required = true;
    editDate.value = elem.date;
    const editDescription = document.createElement("textarea");
    editDescription.value = elem.description;

    const prioritySelector = document.createElement("select");
    const optionPriorityLow = document.createElement("option");
    optionPriorityLow.textContent = "Low";
    optionPriorityLow.value = "low";

    const optionPriorityMedium = document.createElement("option");
    optionPriorityMedium.textContent = "Medium";
    optionPriorityMedium.value = "medium";

    const optionPriorityHigh = document.createElement("option");
    optionPriorityHigh.textContent = "High";
    optionPriorityHigh.value = "high";

    prioritySelector.append(optionPriorityLow,optionPriorityMedium,optionPriorityHigh);

    const submitEditBtn = document.createElement("button");
    submitEditBtn.classList.add("submitEditBtn");
    submitEditBtn.textContent = "Accept"
    submitEditBtn.addEventListener("click",(e) => {         /* Confirma los valores a cambiar */
        e.stopImmediatePropagation()
        e.preventDefault()

        task.setAttribute("priority",prioritySelector.value)
        taskName.textContent = "Name: " + editName.value;
        taskDate.textContent = "Due Date: " + editDate.value;
        taskDescription.textContent = "Description: " + editDescription.value;
        taskPriority.textContent = "Priority: " + prioritySelector.value;
        
        elem.changeName(editName.value);
        elem.changeDate(editDate.value);
        elem.changeDescription(editDescription.value);
        elem.changePriority(prioritySelector.value);
        
        taskEdit.classList.remove("edit-active");
        taskInfo.classList.remove("task-hide");
        setLocalStorage();
    },true)

    taskEdit.append(editName,editDate,editDescription,prioritySelector,submitEditBtn)
    /*------ Edit Form ------*/

    task.append(taskInfo,taskContent,taskEdit);
    return task
}

function resetUiContainer(parent,selected,array) {
    while(parent.firstChild){                 
        parent.removeChild(parent.firstChild)
    }
    array[selected].tasks.forEach((item,i) => {
        const tasks = createTaskUi(item,i);
        parent.append(tasks);
    })
    
}
/* <-------- Menu --------> */
function todoMenu() {
    const menu = document.createElement("div");

    const addProjectButton = document.createElement("img");
    addProjectButton.src = "../src/images/plus-thick.svg";
    addProjectButton.classList.add("addProject")
    addProjectButton.addEventListener("click", () => {
        addProjectForm.classList.add("active")
    })

    const projectButtonsList = document.createElement("ul");
    projectButtonsList.classList.add("projectButtonsSection");

    createProjectButton(projectArray,projectButtonsList);

    const addProjectForm = document.createElement("form");
    addProjectForm.classList.add("addProjectForm");
    addProjectForm.addEventListener("submit",(e) => {
        e.preventDefault();
        const projectName = projectTitleInput.value;
        createProject(projectName);
        createProjectButton(projectArray,projectButtonsList);
        setLocalStorage();
    })

    const projectTitleInput = document.createElement("input")
    const submitProjectButton = document.createElement("button");
    submitProjectButton.textContent = "+"
    addProjectForm.append(projectTitleInput,submitProjectButton)

    menu.classList.add("todoMenu");
    menu.append(addProjectButton,addProjectForm,projectButtonsList)
    return menu
};

function createProjectButton(array,parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    array.forEach((elem,index) => {
        const projectButton = document.createElement("button");
        projectButton.textContent = elem.name;
        projectButton.classList.add("project-button")


        projectButton.addEventListener("click",() => {
            saveSelectedProject(index)
            const mainContainer = document.querySelector(".tasks-container");
            while(mainContainer.firstChild){
                mainContainer.removeChild(mainContainer.firstChild)
            }
            elem.tasks.forEach((item,i) => {
                const tasks = createTaskUi(item,i);
                mainContainer.append(tasks);
            })
            
        })

        const projectItem = document.createElement("li");
        projectItem.dataset.project = index;
        projectItem.append(projectButton,deleteProjectButton(array,parent))
        parent.append(projectItem);
    })
}

function deleteProjectButton(array,parent) {
    const deleteProjectButton = document.createElement("button");
        deleteProjectButton.textContent = "X"; //Cambiar por un icono
        deleteProjectButton.addEventListener("click",(event) => {
            deleteProject(event);
            createProjectButton(array,parent);
            setLocalStorage();
        })
    return deleteProjectButton;
}
/*<-------------------------------- Nav ---------------------------------> */
function navBar() {
    const nav = document.createElement("nav");
    const title = document.createElement("h1");
    title.textContent = "Todo List";
    title.classList.add("nav-title");
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "../src/images/calendar-check.svg"
    const inputFilter = document.createElement("input")
    inputFilter.classList.add("inputFilter");

    nav.append(logo,title,inputFilter);

    return nav
}
