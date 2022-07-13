import { Popup } from "./Popup.js";

export class PopupWithСonfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
       }
    
      setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
          event.preventDefault()
          this._handleSubmitCallback();
      })
}
}