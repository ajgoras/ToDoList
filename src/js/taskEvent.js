htmlTaskList.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("task") || target.classList.contains("taskInside") || target.classList.contains("taskDescription")) {
    console.log(target.id.substr(target.id.length - 1));
  }
  if (target.id == "taskList") {
    addTask();
  }
});

window.addEventListener("click", (event) => {
    if (event.target.id!='taskList' && !event.target.classList.contains('inputTask')) {
        if (htmlTaskList.lastChild.classList.contains("inputTask")) {
            document.querySelector('.inputTask').remove();
        }
    }
});
