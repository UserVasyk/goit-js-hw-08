import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[name=email]");
const messageInput = document.querySelector("[name=message]");

unsavedValues();
formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onFormInput() {
  // через elements не працює видає помилку у консоль
  // evt.currentTarget.elements
  const userInfo = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(userInfo));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const getUserForm = localStorage.getItem("feedback-form-state");
  const parsedUserForm = JSON.parse(getUserForm);

  if (emailInput.value === "" || messageInput.value === "") {
    return;
  }

  console.log(parsedUserForm);
  localStorage.removeItem("feedback-form-state");
  evt.currentTarget.reset();
}

function unsavedValues() {
  const savedInfo = localStorage.getItem("feedback-form-state");

  if (savedInfo) {
    const parsedInfo = JSON.parse(savedInfo);
    emailInput.value = parsedInfo.email;
    messageInput.value = parsedInfo.message;
  }
}
