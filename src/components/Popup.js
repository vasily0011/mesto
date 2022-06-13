export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_is-active");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_is-active");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    }

    _closeOnClick = (event) => {
        if (event.target.classList.contains('popup_is-active') || event.target.classList.contains('popup__close')) {
            this.close();
        }
    }

    setEventListeners(event) {
        this._popup.addEventListener('mousedown', (event) => {
            this._closeOnClick(event);
        })
    }

}