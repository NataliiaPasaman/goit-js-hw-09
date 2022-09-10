// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

 const inputData = document.querySelector('#datetime-picker');
 const btnStart = document.querySelector('[data-start]');
 btnStart.setAttribute('disabled', 'true');

 const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const fp = flatpickr(inputData, options);
fp.selectedDates.push(fp._input.value);

const currentData = new Date;

inputData.addEventListener('input', onSelectedDatesInput)
btnStart.addEventListener('click', onStartTimer);

function onSelectedDatesInput() {

  console.log('currentData', currentData);
  let changedDates = fp.selectedDates[0]
  console.log('changedDates', changedDates);

  inputInvalidDate(changedDates);
  inputValidDate(changedDates);
}

function onStartTimer() {

}
// onStartTimer();

/** 

Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
 */

function inputInvalidDate(changedDates) {
  setTimeout(() => {
    if(currentData > changedDates) {
      window.alert("Please choose a date in the future");
    };
  }, 2000);
}

function inputValidDate(changedDates) {
  setTimeout(() => {
    if(currentData > changedDates) {
      btnStart.removeAttribute('disabled');
    };
  }, 2000);
}