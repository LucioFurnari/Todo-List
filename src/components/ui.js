import { taskArray } from "./classes";
export function createUI(){
    const root = document.querySelector("#content");
    root.append(navBar(),todoMenu(),todoSection())
}

function taskForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("formContainer")
    const form = document.createElement("form");
    form.classList.add("taskForm")

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

    const priorityField = document.createElement("fieldset")
    const priorityLegend = document.createElement("legend")
    const radioInputsContainer = document.createElement("div");
    priorityLegend.textContent = "Select Priority: "

    const firstRadioLabel = document.createElement("label")
    firstRadioLabel.textContent = "Low";
    firstRadioLabel.htmlFor = "low";
    const lowRadioInput = document.createElement("input")
    lowRadioInput.setAttribute("type","radio");
    lowRadioInput.setAttribute("name","priority");
    lowRadioInput.setAttribute("id","low");
    lowRadioInput.required = true;
    lowRadioInput.value = "low"

    const secondRadioLabel = document.createElement("label");
    secondRadioLabel.textContent = "Medium";
    secondRadioLabel.htmlFor = "medium";
    const mediumRadioInput = document.createElement("input");
    mediumRadioInput.setAttribute("type","radio");
    mediumRadioInput.setAttribute("name","priority");
    mediumRadioInput.setAttribute("id","medium");
    mediumRadioInput.value = "medium";

    const thirdRadioLabel = document.createElement("label");
    thirdRadioLabel.textContent = "High";
    thirdRadioLabel.htmlFor = "high";
    const highRadioInput = document.createElement("input");
    highRadioInput.setAttribute("type","radio");
    highRadioInput.setAttribute("name","priority");
    highRadioInput.setAttribute("id","high");
    highRadioInput.value = "high";

    radioInputsContainer.append(firstRadioLabel,lowRadioInput,
                                secondRadioLabel,mediumRadioInput,
                                thirdRadioLabel,highRadioInput)
    priorityField.append(priorityLegend,radioInputsContainer)

    const submitButton = document.createElement("button");
    submitButton.classList.add("submitButton")
    submitButton.textContent = "Add"
    
    form.append(nameInput,descriptionArea,dateInput,priorityField,submitButton);
    formContainer.appendChild(form)
    return formContainer;
}

function todoMenu() {
    const menu = document.createElement("div");
    menu.classList.add("todoMenu");

    return menu
}

function navBar() {
    const nav = document.createElement("nav");
    const logo = document.createElement("h2");
    logo.textContent = "Logo";
    logo.classList.add("logo")
    const inputFilter = document.createElement("input")
    inputFilter.classList.add("inputFilter");

    nav.append(logo,inputFilter);

    return nav
}

function todoSection(){
    const section = document.createElement("div")
    section.classList.add("todo-section")

    const addTaskSection = document.createElement("div");
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container")

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("addTaskButton")
    addTaskButton.textContent = "Add Task"

    addTaskSection.append(addTaskButton,taskForm())
    section.append(addTaskSection,tasksContainer)
    return section
}

export function createTaskUi(elem,i){
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id",i);

    const taskInfo = document.createElement("div")
    taskInfo.classList.add("taskInfo");
    const taskName = document.createElement("p");
    taskName.textContent = "Name: " + elem.name;
    const taskDate = document.createElement("p");
    taskDate.textContent = "Due Date: " + elem.date
    const taskDescription = document.createElement("p");
    taskDescription.textContent = "Description: " + elem.description;
    const taskPriority = document.createElement("p");
    taskPriority.textContent = "Priority: " + elem.priority;

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "Edit";
    editButton.addEventListener("click",() => {
        taskEdit.classList.add("edit-active");
        taskInfo.classList.add("task-hide")
    })

    taskInfo.append(taskName,taskDate,taskDescription,taskPriority,editButton);

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
    const submitEditBtn = document.createElement("button")
    submitEditBtn.classList.add("submitEditBtn");
    submitEditBtn.textContent = "Accept"
    submitEditBtn.addEventListener("click",(e) => {
        e.stopImmediatePropagation()
        e.preventDefault()
        const priorityInput = document.querySelector(".taskEdit input[name = priority]:checked")
        taskName.textContent = editName.value;
        taskDate.textContent = editDate.value;
        taskDescription.textContent = editDescription.value;
        taskPriority.textContent = priorityInput.value

        elem.changeName(editName.value);
        elem.changeDate(editDate.value);
        elem.changeDescription(editDescription.value);
        elem.changePriority(priorityInput.value);
        console.log(elem);
        
        taskEdit.classList.remove("edit-active");
        taskInfo.classList.remove("task-hide");
    },true)

    /*------ Edit Form ------*/
    
    const priorityField = document.createElement("fieldset");
    priorityField.classList.add("priorityField")
    const priorityLegend = document.createElement("legend")
    const radioInputsContainer = document.createElement("div");
    priorityLegend.textContent = "Select Priority: "

    const firstRadioLabel = document.createElement("label")
    firstRadioLabel.textContent = "Low";
    firstRadioLabel.htmlFor = "low";
    const lowRadioInput = document.createElement("input");
    lowRadioInput.checked = true;
    lowRadioInput.setAttribute("type","radio");
    lowRadioInput.setAttribute("name","priority");
    lowRadioInput.setAttribute("id","low");
    lowRadioInput.required = true;
    lowRadioInput.value = "low"

    const secondRadioLabel = document.createElement("label");
    secondRadioLabel.textContent = "Medium";
    secondRadioLabel.htmlFor = "medium";
    const mediumRadioInput = document.createElement("input");
    mediumRadioInput.setAttribute("type","radio");
    mediumRadioInput.setAttribute("name","priority");
    mediumRadioInput.setAttribute("id","medium");
    mediumRadioInput.value = "medium";

    const thirdRadioLabel = document.createElement("label");
    thirdRadioLabel.textContent = "High";
    thirdRadioLabel.htmlFor = "high";
    const highRadioInput = document.createElement("input");
    highRadioInput.setAttribute("type","radio");
    highRadioInput.setAttribute("name","priority");
    highRadioInput.setAttribute("id","high");
    highRadioInput.value = "high";

    radioInputsContainer.append(firstRadioLabel,lowRadioInput,
                                secondRadioLabel,mediumRadioInput,
                                thirdRadioLabel,highRadioInput)
    priorityField.append(priorityLegend,radioInputsContainer)

    taskEdit.append(editName,editDate,editDescription,priorityField,submitEditBtn)
    /*------------*/

    task.append(taskInfo,taskEdit)

    return task
}
