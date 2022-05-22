export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
    this._buttonElement = formElement.querySelector(config.buttonSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }


_showInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.classList.add(this._errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

_checkInputValidity = (inputElement) => {
  if(!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
};

_hasInvalidInput() {
  return this._inputList.some(function (input) {
    return !input.validity.valid;
  });
};

disabledButton = (disabledButtonClass) => {
  this._buttonElement.classList.add(disabledButtonClass);
  this._buttonElement.setAttribute('disabled', '');
}

_toggleButtonState = (disabledButtonClass) => {
  if(this._hasInvalidInput()) {
    this.disabledButton(disabledButtonClass);
  } else {
    this._buttonElement.classList.remove(disabledButtonClass);
    this._buttonElement.removeAttribute('disabled'); 
  }
};

_setEventListeners = (config) => {
  this._toggleButtonState(config.disabledButtonClass);
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(config.disabledButtonClass);
    });
  });
};

enableValidation = () => {
    this._setEventListeners(this._config);
}
clearErrors = () => {
this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
 };

}