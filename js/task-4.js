const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};

  for (const element of form.elements) {
    if (element.tagName === 'INPUT' && element.value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    }

    if (element.tagName === 'INPUT') {
      formData[element.name] = element.value.trim();
    }
  }
  console.log(formData);
  form.reset();
});
