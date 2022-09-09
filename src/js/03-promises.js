import { Notify } from 'notiflix';

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
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
      delay += step;
    }
  }



