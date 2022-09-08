/** HTML містить розмітку форми, в поля якої користувач буде вводити першу 
 * затримку в мілісекундах, крок збільшення затримки для кожного промісу 
 * після першого і кількість промісів, яку необхідно створити. 
 * 
 * Напиши скрипт, який на момент сабміту форми викликає функцію 
 * createPromise(position, delay) стільки разів, скільки ввели в поле amount.
 *  Під час кожного виклику передай їй номер промісу (position), 
 * що створюється, і затримку, враховуючи першу затримку (delay), 
 * введену користувачем, і крок (step).
 * */
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
/** Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
 *  який виконується або відхиляється через delay часу. Значенням промісу повинен 
 * бути об'єкт, в якому будуть властивості position і delay зі значеннями 
 * однойменних параметрів. Використовуй початковий код функції для вибору того, 
 * що потрібно зробити з промісом - виконати або відхилити.
 * createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }); */

  const refs = {
    form: document.querySelector('.form'),
    inputDelay: document.querySelector('[name="delay"]'),
    inputStep: document.querySelector('[name="step"]'),
    inputAmount: document.querySelector('[name="amount"]'),
    btn: document.querySelector('button'),
  }


  refs.form.addEventListener('input', () => {
    console.log(refs.inputDelay.value);
    console.log(refs.inputStep.value);
    console.log(refs.inputAmount.value);
  })

  refs.form.addEventListener('submit', () => {});

  function createPromiseTest(position, delay) {
    position = refs.inputDelay.value;
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }

  createPromiseTest(2, 500);