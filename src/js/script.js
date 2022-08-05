class Task {
    constructor(description, isDone)
    {
        this.id = taskList.length + 1;
        this.description = description;
        this.isDone = isDone;
    }
}
let taskList = [];

let htmlTaskList = document.getElementById('taskList');