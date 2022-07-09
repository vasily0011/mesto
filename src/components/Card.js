export class Card {
  constructor(item, template, handleCardClick, userId) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
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
    this._cardImage.addEventListener('click', () => {this._handleCardClick()});
  }
}