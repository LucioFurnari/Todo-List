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
    return new Project(name,[]);;
}
export function saveSelectedProject(index) {
    projectSelected = index;
    console.log(projectSelected);
}

export function createTodo(todo){
    projectArray[projectSelected].addTask(todo)
    console.log(projectArray);
}
const test = createProject("Test");
test.addTask(createTask("test 1","2023-12-3","description","low",false))
test.addTask(createTask("test 2","2023-12-3","description","low",false))
test.addTask(createTask("test 3","2023-12-3","description","low",false))

projectArray.push(test)
projectArray[0].tasks[2].changeComplete(true)
projectArray[0].tasks[2].changeName("Another name")
console.log(projectArray);
