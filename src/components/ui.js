
export function createUI(){
    const root = document.querySelector("#content");
    root.append(navBar(),taskForm(),todoMenu(),todoSection())
}

function taskForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("formContainer")
    const form = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.classList.add("nameInput");
    const descriptionArea = document.createElement("textarea")
    descriptionArea.classList.add("descriptionArea");
    const dateInput = document.createElement("input")
    dateInput.setAttribute("type","date");
    dateInput.classList.add("dateInput")

    
    form.append(nameInput,descriptionArea,dateInput);
    formContainer.appendChild(form)
    return formContainer;
}

function todoMenu() {
    const menu = document.createElement("div");
    menu.classList.add("todoMenu");

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("addTaskButton")
    addTaskButton.textContent = "Add"

    menu.append(addTaskButton)

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

    return section
}

export function createTaskUi(elem){
    const task = document.createElement("div");
    task.classList.add("task");

    const taskName = document.createElement("p");
    taskName.textContent = elem.name;
    const taskDate = document.createElement("p");
    taskDate.textContent = elem.date
    const taskDescription = document.createElement("p");
    taskDescription.textContent = elem.description;

    task.append(taskName,taskDate,taskDescription)

    return task
}
