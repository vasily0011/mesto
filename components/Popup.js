export class popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this._popupSelector.classList.add("popup_is-active")
    }

    close() {
        this._popupSelector.classList.remove("popup_is-active");
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close()
        }
    }

    _closeOnClick(event) {
        if (event.target.classList.contains('popup_is-active') || event.target.classList.contains('popup__close'));
        this.close();
    }

    setEventListeners(event) {
        this._popupSelector.addEventListener('mousedown', (event) => {
            this._closeClick(event);
        })
    }

}