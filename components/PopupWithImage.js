import { popup } from "./Popup.js";

export class popupWithImage extends popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupSelector.querySelector('.popup__image');
        this._popupText = this._popupSelector.querySelector('.popup__text');    
    }

    open(item) {
        super.open();
        this._popupImage.src = item.link;
        this._popupImage.alt = item.name;
        this._popupText.textContent = item.name;
    };
}