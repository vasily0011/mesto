export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }


_showInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

_hideInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

_checkInputValidity = (config, formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    this._showInputError(config, formElement, inputElement);
  } else {
    this._hideInputError(config, formElement, inputElement);
  }
};

_hasInvalidInput = (inputs) => {
  return inputs.some(function (inputs) {
    return !inputs.validity.valid;
  });
};

disabledButton = (buttonElement, disabledButtonClass) => {
  buttonElement.classList.add(disabledButtonClass);
  buttonElement.setAttribute('disabled', '');
}

_toggleButtonState = (inputs, buttonElement, disabledButtonClass) => {
  if(this._hasInvalidInput(inputs)) {
    this.disabledButton(buttonElement, disabledButtonClass);
  } else {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.removeAttribute('disabled'); 
  }
};

_setEventListeners = (config, formElement) => {
  const inputs = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  this._toggleButtonState(inputs, buttonElement, config.disabledButtonClass);
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(config, formElement, inputElement);
      this._toggleButtonState(inputs, buttonElement, config.disabledButtonClass);
    });
  });
};

enableValidation = (config) => {
    this._setEventListeners(this._config, this._formElement);
};

clearErrors = (config, popup) => {
const formElement = popup.querySelector(config.formSelector);
const inputs = Array.from(popup.querySelectorAll(config.inputSelector));
  inputs.forEach((inputElement) => {
    this._hideInputError(config, formElement, inputElement);
  });
 };

// enableValidation(config);
}