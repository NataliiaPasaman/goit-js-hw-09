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
      console.log('!!!!!!!!!!!!!!!!!!!');
      btnStart.disabled = false;
    } else {
      btnStart.disabled = true;
      window.alert('Please choose a date in the future');
    }
  },
};
const fp = flatpickr(inputData, options);

btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {

  const timerId = setInterval(() => {

    const newSelectedDate = fp.selectedDates[0].getTime();
    const currentDate = (new Date()).getTime();
    ms =  newSelectedDate - currentDate;
 
    if (currentDate < newSelectedDate) {
      console.log(ms);
  
      convertMs(ms);
    }
    if (currentDate > newSelectedDate) {
        clearInterval(timerId);
      }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  spanDays.innerHTML = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  spanHours.innerHTML = hours;
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  spanMinutes.innerHTML = minutes;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  spanSecondes.innerHTML = seconds;

  return { days, hours, minutes, seconds };
}























function onSelectedDatesInput() {
  changedDates = fp.selectedDates[0];

  console.log('currentDate', currentDate);
  // console.log(Number(changedDates));
  console.log('changedDates', changedDates);

  inputInvalidDate(changedDates);
  inputValidDate(changedDates);

  return changedDates;
}

function inputInvalidDate(changedDates) {
  setTimeout(() => {
    if (currentDate > changedDates) {
      window.alert('Please choose a date in the future');
    }
  }, 2000);
}

function inputValidDate(changedDates) {
  if (currentDate > changedDates) {
    btnStart.disabled = false;
  }
  // setTimeout(() => {
  //   if (currentDate > changedDates) {
  //     btnStart.setAttribute('disabled', 'false');
  //   }
  // }, 2000);
}