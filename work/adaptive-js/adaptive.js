const countArray = {};

const inputText = document.querySelector('.label__input');
const butn = document.querySelector('button');
butn.disabled = true;

inputText.addEventListener("keyup", function (e) {
    // console.log(inputText.value);
    if (inputText.value === '') {
        butn.disabled = true;
    }
    else {
        butn.disabled = false;
    }
})

butn.addEventListener("click", function (e) {
    e.preventDefault();
    const txtDisplay = document.querySelector('.info__report');
    const txt = inputText.value; console.log(countArray, txt);

    countArray[txt] = countArray[txt] + 1 || 1;

    txtDisplay.textContent = `The count for ${txt} is ${countArray[txt]}`;
})
