function addTask() {
    if (!htmlTaskList.lastChild.classList.contains('inputTask')) {
        let inputTask = document.createElement('input')
        inputTask.classList.add('inputTask');
        inputTask.placeholder = 'newTask';
        htmlTaskList.appendChild(inputTask);
        inputTask.focus();
        inputTask.addEventListener('keyup', ({ key }) => {
            if (key == 'Enter') {
                confirmTask(inputTask.value);
            }
        })
    }
    else {
        document.querySelector('.inputTask').remove();
    }
}

function confirmTask(taskDescription) {
    let newTask = new Task(taskDescription, false);
    taskList.push(newTask);
    document.querySelector('.inputTask').remove();
    clear();
    render();
}