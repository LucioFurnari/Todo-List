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
    projectArray[projectSelected].removeTask(index);
}   

/*<-------------- Initial project with tasks --------------> */

if(!localStorage.getItem("projects")){
    createProject("Chores");
    createTodo(createTask("Laundry","2023-01-23","None","low",false));
    createTodo(createTask("Wash Dishes","2023-01-23","None","low",false));
    createTodo(createTask("Take out the trash","2023-01-23","None","medium",false));
}

/*<-------------- localStorage --------------> */

export function setLocalStorage() {
    let newArray = projectArray;
    window.localStorage.setItem("projects",JSON.stringify(newArray))
}
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
    projectSelected = undefined;
}

/*<-------------- Filter functions --------------> */

export function filterTasksWeek() {
    let thisWeek = [];
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
export function filterTasksMonth() {
    let thisMonth = [];
    projectArray.map(todo => {
        todo.tasks.map(task => {
            let date = parseISO(task.date);
            let result = isThisMonth(date);
            if (result) {
                thisMonth.push(task);
            }
        })
    });
    return thisMonth;
}

export function filterTaskForName(value){
    let newArray = [];
    let inputValue = value.toLowerCase().trim();
    if(inputValue || inputValue != "") {
        projectArray.map(todo => {
            todo.tasks.map(task => {
                let taskName = task.name.toLowerCase()
                if(taskName.includes(inputValue)) {
                    newArray.push(task);
                }
            })
        });
    }
    return newArray;
}
/*<---------------------------------------------> */
export function resetProjectSelectedValue() {
    projectSelected = undefined;
}
getLocalStorage();

// projectArray[0].tasks[1].addNote("Esto es una nota");
// projectArray[0].tasks[1].addNote("Y esta es otra :P");
// projectArray[0].tasks[1].addNote("Borremos esta");
// projectArray[0].tasks[1].removeNote(1)
// console.log(projectArray[0].tasks[1]);