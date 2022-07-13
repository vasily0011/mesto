export class Card {
  constructor(
    item,
    template,
    handleCardClick,
    userId,
    handleLikeCard,
    handleDeleteCard
  ) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._userId = userId;
    this._likes = item.likes;
    this._id = item.owner._id;
    this._cardId = item._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
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
    this.likeButton = this._element.querySelector(".element__button");
    this.removeButton = this._element.querySelector(".element__button_delete");
    this._cardImage = this._element.querySelector(".element__image");
    this.likeButton.addEventListener("click", () => {
      this._handleLikeCard(this);
    });
    this.removeButton.addEventListener("click", () => {
      this._handleDeleteCard(this);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
  }

  isLiked() {
    return this._likes.some((item) => item._id == this._userId);
  }

  addLikeCard() {
    this.likeButton.classList.add("element__button_active");
  }

  deleteLikeCard() {
    this.likeButton.classList.remove("element__button_active");
  }

  deleteCard() {
    this._element.remove();
  }

  getCardId() {
    return this._cardId;
  }
}
