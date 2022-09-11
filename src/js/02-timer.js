import { Notify } from 'notiflix';
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSecondes = document.querySelector('[data-seconds]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if((selectedDates[0]) > new Date()) {
      btnStart.disabled = false;
    } else {
      btnStart.disabled = true;
      Notify.failure('Please choose a date in the future');
    }
  },
};
const fp = flatpickr(inputData, options);

btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {

  const timerId = setInterval(() => {

    const newSelectedDate = fp.selectedDates[0].getTime();
    const currentDate = (new Date()).getTime();
    let ms =  newSelectedDate - currentDate;
 
    if (currentDate < newSelectedDate) {
      convertMs(ms);
    };

    if (currentDate > newSelectedDate) {
        clearInterval(timerId);
      };
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  spanDays.innerHTML = addLeadingZero(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  spanHours.innerHTML = addLeadingZero(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  spanMinutes.innerHTML = addLeadingZero(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  spanSecondes.innerHTML = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

 function addLeadingZero(value) {
  if (value < 10) {
    return `0${value}`;
  };
  return value;
 }


