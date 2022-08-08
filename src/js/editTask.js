function editTask(targetId) {
    let targetTask = document.getElementById('taskDescription' + targetId);
    let targetTaskDescription = targetTask.innerHTML;
    let descriptionInput = document.createElement('input')
    let taskInside = document.getElementById('taskInside' + targetId);

    targetTask.remove();
    descriptionInput.classList.add("descriptionInput");
    descriptionInput.value = targetTaskDescription;
    taskInside.appendChild(descriptionInput);
    descriptionInput.focus();
    descriptionInput.addEventListener("keyup", ({ key }) => {
        if (key == "Enter") {
            let newDescription = document.createElement('span');
            newDescription.id = 'taskDescription' + targetId;
            newDescription.innerHTML = descriptionInput.value;
            newDescription.classList.add('taskDescription');
            taskInside.appendChild(newDescription);
            taskList[targetId - 1].description = descriptionInput.value;
            descriptionInput.remove();
            sendToServer(taskList);
        }
    });
}
