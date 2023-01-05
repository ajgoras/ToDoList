function getFromServer(task) {
    return fetch("https://todolistbackend-78we.onrender.com/todolist").then((res) => res.json());
}

getFromServer().then(({ tasks }) => {
    tasks.forEach((tasks) => {
        taskList.push(tasks);
    })
    render();
})

let hintText = document.createElement('span');
hintText.id = 'hintText';
hintText.innerHTML = 'Click to add your first task :)';
htmlTaskList.appendChild(hintText);