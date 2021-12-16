"use strict";

const inputText1 = document.querySelector('#fn');
const inputText2 = document.querySelector('#ln');
const butn = document.querySelector('.form_submit');
butn.disabled = true;

let cur = inputText1.value.slice(-1);


if(!isNaN(cur)){

    inputText1.value = '';
}

if(!isNaN(cur)){

    inputText2.value = '';
}

// ------------------

inputText1.addEventListener("keyup", function (e) {

    if (inputText1.value === '' || inputText2.value === '' || !isNaN(inputText1.value) || !isNaN(inputText2.value)) {
        butn.disabled = true;

    }
    else {
        butn.disabled = false;

    }

    if(!isNaN(inputText1.value)){

        inputText1.value = '';

    }

    if(!isNaN(inputText2.value)){

        inputText2.value = '';

    }
})

inputText2.addEventListener("keyup", function (e) {

    if (inputText2.value === '' || inputText1.value === '' || !isNaN(inputText1.value) || !isNaN(inputText2.value)) {
        butn.disabled = true;

    }
    else {
        butn.disabled = false;

    }


    if(!isNaN(inputText1.value)){

        inputText1.value = '';

    }

    if(!isNaN(inputText2.value)){

        inputText2.value = '';

    }

})

//-------------
// top to bottom
inputText2.addEventListener("keyup", function (e) {
    inputText1.addEventListener("keyup", function (e) {

        if (inputText1.value === '' || inputText2.value === '' || !isNaN(inputText1.value) || !isNaN(inputText2.value)) {
            butn.disabled = true;

        }
        else {
            butn.disabled = false;

        }

        if(!isNaN(inputText1.value)){

            inputText1.value = '';

        }

        if(!isNaN(inputText2.value)){

            inputText2.value = '';

        }
    })
})

//bot to top
inputText1.addEventListener("keyup", function (e) {
    inputText2.addEventListener("keyup", function (e) {

        if (inputText2.value === '' || inputText1.value === '' || !isNaN(inputText1.value) || !isNaN(inputText2.value)) {
            butn.disabled = true;

        }
        else {
            butn.disabled = false;

        }


        if(!isNaN(inputText1.value)){

            inputText1.value = '';

        }

        if(!isNaN(inputText2.value)){

            inputText2.value = '';

        }

    })
})

