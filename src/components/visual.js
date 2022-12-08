import { createTask } from "./classes";

export function createUI(){
    const testButton = document.createElement("button");
    testButton.classList.add("testButton")
    testButton.textContent = "Add"

    const root = document.querySelector("#content");
    root.append(navBar(),taskForm(),testButton)

    const inputName = document.querySelector(".nameInput");
    const descriptionArea = document.querySelector(".descriptionArea");
    const dateInput = document.querySelector(".dateInput")

    testButton.addEventListener("click",() => {
    const name = createTask(inputName.value,dateInput.value,descriptionArea.value)
    console.log(name);
})
}

function taskForm() {
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

    return form;
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


