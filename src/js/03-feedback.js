import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

getDataForm();

function onSubmitForm(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(formKey);
}

function onFormData(e) {
  let formData = localStorage.getItem(formKey);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  formData = localStorage.setItem(formKey, JSON.stringify(formData));
}

function getDataForm() {
  let data = localStorage.getItem(formKey);
  if (data) {
    data = JSON.parse(data);
    Object.entries(data).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
