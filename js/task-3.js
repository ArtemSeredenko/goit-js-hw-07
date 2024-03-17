const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function updateSpanText(event) {
  const trimmedValue = event.target.value.trim();
  if (trimmedValue === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = trimmedValue;
  }
}

input.addEventListener('input', updateSpanText);

// Вариант со стрелочной функцией

// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');

// input.addEventListener('input', event => {
//   const trimmedValue = event.target.value.trim();

//   if (trimmedValue === '') {
//     span.textContent = 'Anonymous';
//   } else {
//     span.textContent = trimmedValue;
//   }
// });
