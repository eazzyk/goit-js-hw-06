const fontSizeControl = document.querySelector('#font-size-control');
const mainText = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  mainText.style.fontSize = fontSizeControl.value + 'px';
});
