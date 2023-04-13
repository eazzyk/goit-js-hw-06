const validInput = document.querySelector('#validation-input');

validInput.addEventListener('blur', validInputBlur);

function validInputBlur(evt) {
  const inputValue = evt.target.value;
  const dataLength = Number(evt.target.dataset.length);

  if (inputValue.length === dataLength) {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  } else {
    validInput.classList.add('invalid');
    validInput.classList.remove('valid');
  }
}
