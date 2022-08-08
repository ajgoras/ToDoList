let colorCircles = document.getElementsByClassName('colorCircle');
let mainHeader = document.querySelector('h1');
let taskCountHeader = document.querySelector('h2');
let currentColor = localStorage.getItem('color');
let currentColorId = localStorage.getItem('colorId');
let colorPickerButton = document.querySelector('#colorPickerButton');
let colorsDiv = document.querySelector('#colors');

function confirmColor(color, colorId) {
    for (let i = 0; i < colorCircles.length; i++) {
        colorCircles[i].classList.remove('active');
    }
    colorCircles[colorId].classList.add('active');
    mainHeader.className = color;
    taskCountHeader.className = color;
    mainHeader.classList.add('transitionColor');
    taskCountHeader.classList.add('transitionColor');
    document.documentElement.style.setProperty('--done', `var(--${color}Dark)`);
    document.documentElement.style.setProperty('--doneLight', `var(--${color}Light)`);
    localStorage.setItem('color', color);
    localStorage.setItem('colorId', colorId);
}

colorCircles[0].addEventListener('click', () => {
    confirmColor('purple', 0);
});
colorCircles[1].addEventListener('click', () => {
    confirmColor('blue', 1);
});
colorCircles[2].addEventListener('click', () => {
    confirmColor('green',2)
});
colorCircles[3].addEventListener('click', () => {
    confirmColor('orange', 3);
});

colorPickerButton.addEventListener('click', () => {
    if (colorsDiv.classList.contains('displayNone')) {
        colorsDiv.classList.remove('displayNone');
        colorsDiv.classList.add('scale-up-top');
        setTimeout(() => {
            colorsDiv.classList.remove('scale-up-top');
        }, 260);
    }
    else {
        colorsDiv.classList.add('scale-up-top-reverse');
        setTimeout(() => {
            colorsDiv.classList.add('displayNone');
            colorsDiv.classList.remove('scale-up-top-reverse');
        }, 260);
    }
})

confirmColor(currentColor, currentColorId);

setTimeout(() => {
    mainHeader.classList.add('transitionColor');
    taskCountHeader.classList.add('transitionColor');
}, 450);
