const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
function inputHandle() {
    textEl.style['font-size'] = inputEl.value + 'px';
}
inputEl.addEventListener('input', inputHandle);