export class Card {
  constructor(item, template, handlePhotoImage) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._handlePhotoImage = handlePhotoImage;
  }

  _getTemplate() {
    const CardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
    return CardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
     this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _handlePhotoClick = () => {
    this._handlePhotoImage({name: this._name, link: this._link})
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".element__button");
    const removeButton = this._element.querySelector(".element__button_delete");
    const elementImage = this._element.querySelector(".element__image");
    likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle("element__button_active");
    });
    removeButton.addEventListener('click', (event) => {
      this._element.remove();
    })
    elementImage.addEventListener('click', this._handlePhotoClick);
  }
}