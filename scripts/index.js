import { Card } from './Card.js'
import { initialCards } from './dataCards.js';
import { FormValidator } from './FormValidator.js';
import { config } from '../utils.js';



const listCards = document.querySelector(".elements");
const template = document.querySelector(".template");
const modalWindowAddCard = document.querySelector(".popup_add-Card");
const formElementAddCard = modalWindowAddCard.querySelector('.popup__form');
const popupFormSaveButton =
  modalWindowAddCard.querySelector(".popup__form-save");
const modalAddCardCloseButton =
  modalWindowAddCard.querySelector(".popup__close");
const inputTitleAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_title"
);
const inputLinkAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_link"
);
const modalWindowImage = document.querySelector(".popup_card");
const modalImageCloseButton = modalWindowImage.querySelector(".popup__close");
const popupImage = modalWindowImage.querySelector(".popup__image");
const popupText = modalWindowImage.querySelector(".popup__text");
const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const modalProfileCloseButton =
  modalWindowProfile.querySelector(".popup__close");
const addCardButton = document.querySelector(".profile__add-button");
const formElementEditProfile = modalWindowProfile.querySelector(".popup__form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameImput = document.querySelector(".popup__input_type_name");
const jobImput = document.querySelector(".popup__input_type_job");
const cardFormValidator = new FormValidator(config, formElementAddCard);
const profileFormValidator = new FormValidator(config, formElementEditProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add("popup_is-active");
  document.addEventListener('keydown', closeOnEsc);
  document.addEventListener('click', closeClickOnOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-active");
  document.removeEventListener('keydown', closeOnEsc);
  document.removeEventListener('click', closeClickOnOverlay);
}


function openImageCard(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupText.textContent = item.name;
  openPopup(modalWindowImage);
};


function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = new Card({ name: inputTitleAddCard.value, link: inputLinkAddCard.value }, '.template', openImageCard);
  formElementAddCard.reset();
  cardFormValidator.disabledButton(popupFormSaveButton, config.disabledButtonClass);
  listCards.prepend(newCard.generateCard());
  closePopup(modalWindowAddCard);
}

function submitFormProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameImput.value;
  profileSubtitle.textContent = jobImput.value;
  closePopup(modalWindowProfile);
}

function closeOnEsc(event) {
  if (event.key === "Escape") {
    const popupIsActive = document.querySelector(".popup_is-active");
    closePopup(popupIsActive);
  }
}

function closeClickOnOverlay(event) {
  if (event.target.classList.contains('popup_is-active')) {
    closePopup(event.target);
  }
};

modalImageCloseButton.addEventListener("click", function () {
  closePopup(modalWindowImage);
});

formElementAddCard.addEventListener("submit", handleAddCard);


editButtonProfile.addEventListener("click", function () {
  nameImput.value = profileTitle.textContent;
  jobImput.value = profileSubtitle.textContent;
  openPopup(modalWindowProfile);
  profileFormValidator.clearErrors(config, modalWindowProfile);
});

modalProfileCloseButton.addEventListener("click", function () {
  closePopup(modalWindowProfile);
});

addCardButton.addEventListener("click", function () {
  openPopup(modalWindowAddCard);
  cardFormValidator.clearErrors(config, modalWindowAddCard);
});

modalAddCardCloseButton.addEventListener("click", function () {
  closePopup(modalWindowAddCard);
});

formElementEditProfile.addEventListener("submit", submitFormProfile);


function getCard(item) {
  const card = new Card(item, '.template', openImageCard);
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((item) => {
  listCards.append(getCard(item));
}); 