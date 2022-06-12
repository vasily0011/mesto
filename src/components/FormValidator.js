export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
    this._buttonElement = formElement.querySelector(config.buttonSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._disabledButtonClass = config.disabledButtonClass;
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

_disabledButton = () => {
  this._buttonElement.classList.add(this._disabledButtonClass);
  this._buttonElement.setAttribute('disabled', '');
}

_toggleButtonState = () => {
  if(this._hasInvalidInput()) {
    this._disabledButton(this._disabledButtonClass);
  } else {
    this._buttonElement.classList.remove(this._disabledButtonClass);
    this._buttonElement.removeAttribute('disabled'); 
  }
};

// resetValidation = (disabledButtonClass) => {
//   this._toggleButtonState(disabledButtonClass);
//   this._inputList.forEach((inputElement) => {
//     this._hideError(inputElement)
//   });

// }

_setEventListeners = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
};

enableValidation = () => {
    this._setEventListeners();
}
clearErrors = () => {
  this._disabledButton()
this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
 };

}