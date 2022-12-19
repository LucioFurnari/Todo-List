export const taskArray = [];
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
}
export function createTask(name,date,description,priority,complete) {
    // const newTask = new Todo(name,date,description,priority,complete);
    // taskArray.push(newTask);
    return new Todo(name,date,description,priority,complete);
}

export function createProject(name) {
    const newProject = new Project(name,[]);
    projectArray.push(newProject);
}
export function saveSelectedProject(index) {
    projectSelected = index;
}

export function createTodo(todo){
    projectArray[projectSelected].addTask(todo)
    console.log(projectArray);
}

export function deleteProject(event){
    const targetIndex = event.target.parentNode.getAttribute("data-project")
    // console.log(event.target.parentNode.getAttribute("data-project"));
    projectArray.forEach((proj,index) => {
        if(targetIndex == index){
            console.log(proj);
            projectArray.splice(index,1);
        }
    })
}

