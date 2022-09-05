import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const dataForm = {};

function dataStorage() {
  const data = JSON.parse(localStorage.getItem(formKey));
  const email = document.querySelector('input');
  const message = document.querySelector('textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}

function onFormData(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(dataForm));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(formKey)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(formKey);
}
