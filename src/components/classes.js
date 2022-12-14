export const taskArray = [];

class Todo {
    constructor(name,date,description,priority,favorite){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.favorite = favorite;
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
}

export function createTask(name,date,description,priority,favorite) {
    const newTask = new Todo(name,date,description,priority,favorite);
    taskArray.push(newTask);
}