
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

    const submitButton = document.createElement("button");
    submitButton.classList.add("submitButton")
    submitButton.textContent = "Add"
    
    form.append(nameInput,descriptionArea,dateInput,submitButton);
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

export function createTaskUi(elem){
    const task = document.createElement("div");
    task.classList.add("task");

    const taskName = document.createElement("p");
    taskName.textContent = "Name: " + elem.name;
    const taskDate = document.createElement("p");
    taskDate.textContent = "Due Date: " + elem.date
    const taskDescription = document.createElement("p");
    taskDescription.textContent = "Description: " + elem.description;

    task.append(taskName,taskDate,taskDescription)

    return task
}
