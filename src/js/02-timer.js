// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
/** Напиши скрипт таймера, який здійснює зворотний відлік до певної дати. 
 * 
 * 
 */


/** HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, 
 * таймер повинен запускатися. Додай мінімальне оформлення елементів інтерфейсу. */

 const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr("#datetime-picker", options);