export class Card {
  constructor(item, template, handleCardClick, userId, handleLikeCard) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._userId = userId;
    this._likes = item.likes;
    this._id = item.owner._id;
    this._cardId = item._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
  }

  _getTemplate() {
    const сardElement = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
    return сardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeCounter = this._element.querySelector(".element__like_counter");
    this._setEventListeners();
    if (this._id !== this._userId) {
      this._element.querySelector(".element__button_delete").remove();
    }
    this._likeCounter.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".element__button");
    this._removeButton = this._element.querySelector(".element__button_delete");
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton.addEventListener("click", (event) => {
      event.target.classList.toggle("element__button_active");
    });
    this._removeButton.addEventListener("click", (event) => {
      this._element.remove();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
  }
}
