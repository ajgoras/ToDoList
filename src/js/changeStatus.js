function changeStatus(i) {
    let selector = '#taskDescription' + (i+1);
    let circleSelector = '#statusCircle' + (i + 1);
    let circleInteriorSelector = '#statusCircleInterior' + (i + 1);

    if (taskList[i].isDone==false) {
        taskList[i].isDone = true;
        document.querySelector(selector).classList.add('done')
        document.querySelector(circleSelector).classList.add('done')
        document.querySelector(circleInteriorSelector).classList.add('done');
    }
    else {
        taskList[i].isDone = false;
        document.querySelector(selector).classList.remove('done')
        document.querySelector(circleSelector).classList.remove('done')
        document.querySelector(circleInteriorSelector).classList.remove('done');
    }
}