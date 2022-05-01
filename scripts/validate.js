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

const showInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (config, formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement);
  } else {
    hideInputError(config, formElement, inputElement);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some(function (inputs) {
    return !inputs.validity.valid;
  });
};

const toggleButtonState = (inputs, buttonElement, DisabledButtonClass) => {
  if(hasInvalidInput(inputs)) {
    buttonElement.classList.add(DisabledButtonClass);
    buttonElement.setAttribute('disabled','');
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

const clearErrors = (config, popup) => {
const formElement = popup.querySelector(config.formSelector);
const inputs = Array.from(popup.querySelectorAll(config.inputSelector));
  inputs.forEach((inputElement) => {
    hideInputError(config, formElement, inputElement);
  });
 };

enableValidation(config);