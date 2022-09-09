 const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  btn: document.querySelector('button'),
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
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

  refs.form.addEventListener('submit', onSubmitForm);

  function onSubmitForm(amount, position) {
    event.preventDefault();

    let delay =  Number(refs.inputDelay.value);
    let step = Number(refs.inputStep.value);
    amount = Number(refs.inputAmount.value);

    for(let i = 1; i <= amount; i += 1) {
      position = i;

      createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
      delay += step;
    }
  }



