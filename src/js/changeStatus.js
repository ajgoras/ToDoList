function changeStatus(item) {
    let selector = '#taskDescription' + (item+1);
    let circleSelector = '#statusCircle' + (item + 1);
    let circleInteriorSelector = '#statusCircleInterior' + (item + 1);

    if (taskList[item].isDone==false) {
        taskList[item].isDone = true;
        document.querySelector(selector).classList.add('done')
        document.querySelector(circleSelector).classList.add('done')
        document.querySelector(circleInteriorSelector).classList.add('done');
        sendToServer(taskList);
    }
    else {
        taskList[item].isDone = false;
        document.querySelector(selector).classList.remove('done')
        document.querySelector(circleSelector).classList.remove('done')
        document.querySelector(circleInteriorSelector).classList.remove('done');
    }
    sendToServer(taskList);
}