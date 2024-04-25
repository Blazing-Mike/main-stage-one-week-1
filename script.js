const equal = document.getElementById('equal');
let reset = document.getElementById('reset');
let display = document.getElementById('result');
let buttons = document.querySelectorAll('.primary-btn');
let deleteBtn = document.getElementById('del');
let calculator = document.getElementById('calc-body');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

  
// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'reset') {
      // clear everything on display
      display.value = '';
    } else if (clickedButtonValue == 'del'){
        display.value = display.value.slice(0, -1);
    }  else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }

  deleteBtn.addEventListener('click', () =>{
    display.value.slice(0, -1);
  });