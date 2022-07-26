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
htmlTaskList = document.getElementById('taskList');

let defaultTask = new Task('TestTask', false);
let defaultTask2 = new Task('SecondTestTask', false);

taskList.push(defaultTask);
taskList.push(defaultTask2);

