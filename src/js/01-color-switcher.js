
/** Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled). */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', startColorSwitcger);
refs.stopBtn.addEventListener('click', stopColorSwitcher);

function startColorSwitcger() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopColorSwitcher() {
    clearInterval(timerId);
}