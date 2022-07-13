import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._buttonSubmit = this._popupForm.querySelector('.popup__form-save')
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        this._popupForm.addEventListener("submit", (event) => {
          event.preventDefault();
          this._submitForm(this._getInputValues());
        });
        super.setEventListeners();
      }

    renderLoading(isLoading, intialMessage, updateMessage) {
        if(isLoading) {
          this._buttonSubmit.textContent = updateMessage;
        } else {
          this._buttonSubmit.textContent = intialMessage;
        }
      }

    close() {
        super.close();
        this._popupForm.reset();
    }
}