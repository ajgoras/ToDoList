function clear() {
    let allTasks = document.getElementsByClassName('task');
    Array.from(allTasks).forEach(function (item) {
        item.remove();
    });
}

function render() {
    taskList.forEach(element => {
        let task = document.createElement('div');
        task.id = 'task' + element.id;
        task.classList.add('task');
        htmlTaskList.appendChild(task);

        let taskInside = document.createElement('div');
        taskInside.id = 'taskInside' + element.id;
        taskInside.classList.add('taskInside');
        task.appendChild(taskInside);

        let statusCircle = document.createElement('div');
        statusCircle.id = 'statusCircle' + element.id;
        statusCircle.classList.add('statusCircle');
        taskInside.appendChild(statusCircle);

        let taskDescription = document.createElement('span');
        taskDescription.id = 'taskDescription' + element.id;
        taskDescription.innerHTML = element.description;
        taskDescription.classList.add('taskDescription');
        taskInside.appendChild(taskDescription);

        let line = document.createElement('hr');
        line.classList.add('line');
        task.appendChild(line);
    });
}
render();