function getFromServer(task) {
    return fetch("http://127.0.0.1:8888/todolist").then((res) => res.json());
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