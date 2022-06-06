export class Card {
  constructor(item, template, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const сardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
    return сardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _handlePhotoClick = () => {
    this._handleCardClick({ name: this._name, link: this._link })
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".element__button");
    this._removeButton = this._element.querySelector(".element__button_delete");
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle("element__button_active");
    });
    this._removeButton.addEventListener('click', (event) => {
      this._element.remove();
    })
    this._cardImage.addEventListener('click', this._handlePhotoClick);
  }
}