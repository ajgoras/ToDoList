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
        statusCircle.addEventListener('click', () => {
            changeStatus(element.id-1);
        })        
        let statusCircleInterior = document.createElement('div');
        statusCircleInterior.id = 'statusCircleInterior' + element.id;
        statusCircleInterior.classList.add('statusCircleInterior');
        statusCircle.appendChild(statusCircleInterior);

        let taskDescription = document.createElement('span');
        taskDescription.id = 'taskDescription' + element.id;
        taskDescription.innerHTML = element.description;
        taskDescription.classList.add('taskDescription');
        taskInside.appendChild(taskDescription);

        let line = document.createElement('hr');
        line.classList.add('line');
        task.appendChild(line);

        if (taskList[element.id - 1].isDone == true) {
            let selector = '#taskDescription' + element.id;
            let circleSelector = '#statusCircle' + element.id;
            let circleInteriorSelector = '#statusCircleInterior' + element.id;
            document.querySelector(selector).classList.add('done')
            document.querySelector(circleSelector).classList.add('done')
            document.querySelector(circleInteriorSelector).classList.add('done');
        }
    });
    let hintText = document.getElementById('hintText');
    if (taskList.length>0 && htmlTaskList.firstChild==hintText) {
        htmlTaskList.removeChild(hintText);
    }
    else if(taskList.length==0){
        let hintText = document.createElement('span');
        hintText.id = 'hintText';
        hintText.innerHTML = 'Click to add your first task :)';
        htmlTaskList.appendChild(hintText);
    }
}