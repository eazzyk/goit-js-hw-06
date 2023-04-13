const formLog = document.querySelector('.login-form');

formLog.addEventListener('submit', onSumbit);

function onSumbit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('(x)Поля вводу не заповнені!\nБудь ласка заповніть поля');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);
    formLog.reset();
  }
}
