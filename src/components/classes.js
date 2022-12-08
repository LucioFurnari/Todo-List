class Todo {
    constructor(name,date,description,priority,favorite){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.favorite = favorite;
    }
}

export function createTask(name,date,description,priority,favorite) {
    const newTask = new Todo(name,date,description,priority,favorite);

    return newTask;
}