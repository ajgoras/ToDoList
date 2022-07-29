function addTask() {
    if (!htmlTaskList.hasChildNodes()) {
        createInput();
    }
    else {
        if (!htmlTaskList.lastChild.classList.contains("inputTask")) {
            createInput();
        } else {
            document.querySelector(".inputTask").remove();
        }
    }
}

function createInput() {
    let inputTask = document.createElement("input");
    inputTask.classList.add("inputTask");
    inputTask.placeholder = "Enter a new task";
    htmlTaskList.appendChild(inputTask);
    inputTask.focus();
    inputTask.addEventListener("keyup", ({ key }) => {
        if (key == "Enter") {
            confirmTask(inputTask.value);
        }
    });
}

function confirmTask(taskDescription) {
  let newTask = new Task(taskDescription, false);
  taskList.push(newTask);
  sendToServer(taskList);
  document.querySelector(".inputTask").remove();
  clear();
  render();
}