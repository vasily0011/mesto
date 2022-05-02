const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__form-save',
  disabledButtonClass: 'popup__form-save_disabled',
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

const disabledButton = (buttonElement, disabledButtonClass) => {
  buttonElement.classList.add(disabledButtonClass);
  buttonElement.setAttribute('disabled', '');
}

const toggleButtonState = (inputs, buttonElement, disabledButtonClass) => {
  if(hasInvalidInput(inputs)) {
    disabledButton(buttonElement, disabledButtonClass);
  } else {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.removeAttribute('disabled'); 
  }
};

const setEventListeners = (config, formElement) => {
  const inputs = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  toggleButtonState(inputs, buttonElement, config.disabledButtonClass);
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(config, formElement, inputElement);
      toggleButtonState(inputs, buttonElement, config.disabledButtonClass);
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