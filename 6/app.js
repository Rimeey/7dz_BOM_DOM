'use strict'

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        if (e.target.textContent === 'C') {
            currentInput = '';
            display.value = '';

        } else if (e.target.textContent === '=') {
            const result = eval(currentInput);
            display.value = result;
            currentInput = result.toString();

        } else {
            currentInput += e.target.textContent;
            display.value = currentInput;
        }
        
    });
});