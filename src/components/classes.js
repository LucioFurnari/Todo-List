import { isThisWeek, isThisMonth, parseISO } from 'date-fns';


export const projectArray = [];
export let projectSelected = 0;
class Todo {
    constructor(name,date,description,priority,complete,notes = []){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
        this.notes = notes;
    }

    changeName(value) {
        this.name = value;
    }

    changeDate(value) {
        this.date = value;
    }

    changeDescription(value){
        this.description = value;
    }

    changePriority(value){
        this.priority = value;
    }

    changeComplete(value){
        this.complete = value;
    }

    addNote(note){
        this.notes.push({note,checkNote: false});
    }

    removeNote(index) {
        this.notes.splice(index,1);
    }
    checkNote(index) {
        this.notes[index].checkNote = !this.notes[index].checkNote;
        console.log(this.notes);
    }

    crossNote(index) {

    }
}
class Project {
    constructor(name,tasks){
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(index) {
        this.tasks.splice(index,1)
    }
}
export function saveSelectedProject(index) {
    projectSelected = index;
}

/*<-------------- Create functions --------------> */

export function createTask(name,date,description,priority,complete,notes) {
    return new Todo(name,date,description,priority,complete,notes);
}

export function createProject(name) {
    const newProject = new Project(name,[]);
    projectArray.push(newProject);
}

export function createTodo(todo){
    projectArray[projectSelected].addTask(todo)
}

/*<-------------- Delete functions --------------> */

export function deleteProject(event){
    const targetIndex = event.target.parentNode.getAttribute("data-project")
    projectArray.forEach((proj,index) => {
        if(targetIndex == index){
            projectArray.splice(index,1);
        }
    })
}

export function deleteTask(index) {
    projectArray[projectSelected].removeTask(index)
}   

/*<-------------- Initial project with tasks --------------> */

if(!localStorage.getItem("projects")){
    createProject("Test");
    createTodo(createTask("Test","2022-12-07","fafa","low",false))
}

/*<-------------- localStorage --------------> */

export function setLocalStorage() {
    let newArray = projectArray;
    window.localStorage.setItem("projects",JSON.stringify(newArray))
};
function getLocalStorage() {
    let getArray = JSON.parse(window.localStorage.getItem("projects"));
    if(getArray != null){
        getArray.forEach((project,index) => {
            createProject(project.name);
            projectSelected = index;
            project.tasks.forEach(task  => {
                createTodo(createTask(task.name,task.date,task.description,task.priority,task.complete,task.notes));
            })
        })
    }
}

/*<-------------- Filter functions --------------> */

export function filterTasksWeek() {
    let thisWeek = []
    projectArray.map(todo => {
        todo.tasks.map(task => {
            let date = parseISO(task.date);
            let result = isThisWeek(date);
            if (result) {
                thisWeek.push(task);
            }
        })
    });
    return thisWeek;
}   
getLocalStorage();

// projectArray[0].tasks[1].addNote("Esto es una nota");
// projectArray[0].tasks[1].addNote("Y esta es otra :P");
// projectArray[0].tasks[1].addNote("Borremos esta");
// projectArray[0].tasks[1].removeNote(1)
// console.log(projectArray[0].tasks[1]);