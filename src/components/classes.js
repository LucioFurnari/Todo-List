export const taskArray = [];
const projectArray = [];
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
    const newTask = new Todo(name,date,description,priority,complete);
    taskArray.push(newTask);
    return new Todo(name,date,description,priority,complete);
}

function createProject(name) {
    return new Project(name,[]);;
}

const test = createProject("Test");
test.addTask({task:"test"})
test.addTask({task:"test 2"})
test.addTask(createTask("test 3","2023-12-3","description","low",false))

projectArray.push(test)
projectArray[0].tasks[2].changeComplete(true)
projectArray[0].tasks[2].changeName("Another name")
console.log(projectArray);
