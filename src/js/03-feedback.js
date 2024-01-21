import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handleFormInput, 500));
form.addEventListener('submit', handleFormSubmit);

const { email, message } = form.elements;

let feedbackFormObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

handleFormRestoration();

function handleFormInput(event) {
  feedbackFormObj[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormObj));
}

function handleFormRestoration() {
  const savedFeedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedFeedbackForm) {
    email.value = savedFeedbackForm.email ?? '';
    message.value = savedFeedbackForm.message ?? '';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
