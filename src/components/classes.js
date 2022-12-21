
export const projectArray = [];
export let projectSelected = 0;
class Todo {
    constructor(name,date,description,priority,complete){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
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

export function createTask(name,date,description,priority,complete) {
    return new Todo(name,date,description,priority,complete);
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

createProject("Test");
createTodo(createTask("Test","2022-12-07","fafa","low",false))