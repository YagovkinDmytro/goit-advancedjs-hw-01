import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleEvent);
form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();

  let valueEmail = form.elements.email.value;
  let valueMessage = form.elements.message.value;
  const feedbackFormKey = 'feedback-form-state';
  const savedFeedbackForm = localStorage.getItem(feedbackFormKey);
  const feedbackFormObj = {
    valueEmail,
    valueMessage,
  };

  if (savedFeedbackForm) {
    const parsedFeedbackForm = JSON.parse(savedFeedbackForm);
    valueEmail = parsedFeedbackForm.valueEmail;
    valueMessage = parsedFeedbackForm.valueMessage;
    console.log(valueEmail);
    console.log(valueMessage);
  }

  localStorage.setItem(feedbackFormKey, JSON.stringify(feedbackFormObj));

  // if (event.target.nodeName !== 'BUTTON') {
  //   return;
  // } else {
  // }
}
