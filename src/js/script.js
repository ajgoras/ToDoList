class Task {
    constructor(description, isDone)
    {
        this.id = taskCount + 1;
        this.description = description;
        this.isDone = isDone;
        taskCount++;
    }
}
let taskCount = 0;
let taskList = [];

let htmlTaskList = document.getElementById('taskList');