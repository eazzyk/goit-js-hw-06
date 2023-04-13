const counterValue = document.querySelector('#value');
let value = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
function decrement() {
  value -= 1;
  counterValue.textContent = value;
}

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);
function increment() {
  value += 1;
  counterValue.textContent = value;
}
