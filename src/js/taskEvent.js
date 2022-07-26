

htmlTaskList.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('task') || target.classList.contains('taskInside') || target.classList.contains('taskDescription')) {
        console.log(target.id.substr(target.id.length - 1));
    }
    if (target.id == ('taskList')) {
        addTask();
    }

})