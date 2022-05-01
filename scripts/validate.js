// function EnableValidation(config) {
//   const form = document.querySelector(config.formSelector);
//   const inputs = form.querySelectorAll(config.inputSelector);

//   inputs.forEach((element) => {
//     element.addEventListener("input", (event) =>
//       handleFormInput(event, form, config)
//     );
//   });

//   form.addEventListener("submit", (event) => handleFormSubmit(event, form));

//   toggleButton(form, config);
// }

// function toggleButton(form, config) {
//   const button = document.querySelector(config.buttonSelector);
//   button.disabled = !form.checkValidity();
//   button.classList.toggle("popup__form-save_disabled", !form.checkValidity());
// }

// function handleFormSubmit(event, form) {
//   event.preventDefault();
// }

// function handleFormInput(event, form, config) {
//   const input = event.target;
//   const errorNode = document.querySelector(`#${input.id}-error`);

//   if (input.validity.valid) {
//     errorNode.textContent = "";
//   } else {
//     errorNode.textContent = input.validationMessage;
//   }
//   toggleButton(form, config);
// }

// EnableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   buttonSelector: ".popup__form-save",
// });

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__form-save',
  DisabledButtonClass: 'popup__form-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__error'
};

const showInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = function (config, formElement, inputElement) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
  } else {
    hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some(function (inputs) {
    return !inputs.validity.valid;
  });
};

const disableSubmitButton = function (buttonElement, DisabledButtonClass) {
  buttonElement.classList.add(DisabledButtonClass);
  buttonElement.setAttribute('disabled','');
};

const toggleButtonState = function (inputs, buttonElement, DisabledButtonClass) {
  if(hasInvalidInput(inputs)) {
    disableSubmitButton(buttonElement, DisabledButtonClass);
  } else {
    buttonElement.classList.remove(DisabledButtonClass);
    buttonElement.removeAttribute('disabled'); 
  }
};

const setEventListeners = (config, formElement) => {
  const inputs = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  toggleButtonState(inputs, buttonElement, config.DisabledButtonClass);
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(config, formElement, inputElement);
      toggleButtonState(inputs, buttonElement, config.DisabledButtonClass);
    });
  });
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((formElement) => {
    setEventListeners(config, formElement);
  });
};

const deleteErrors = function (config, modalWindow) {
// const formElement = modalWindow.querySelector(config.formSelector);
const inputs = Array.from(modalWindow.querySelectorAll(object.inputSelector));
  inputs.forEach((inputElement) => {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  });
 };

enableValidation(config);