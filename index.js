import "./index.css";
import { config } from "./constants/constants.js";
import { Card } from "./components/Card.js";
import { initialCards } from "./components/dataCards.js";
import { FormValidator } from "./components/FormValidator.js";
import { Section } from "./components/Section.js";
// import { popupWithImage } from "./components/PopupWithImage.js";

const listCards = document.querySelector(".elements");
// const template = document.querySelector(".template");
const modalWindowAddCard = document.querySelector(".popup_add-Card");
const formElementAddCard = modalWindowAddCard.querySelector(".popup__form");
const popupFormSaveButton =
  modalWindowAddCard.querySelector(".popup__form-save");
const inputTitleAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_title"
);
const inputLinkAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_link"
);
const modalWindowImage = document.querySelector(".popup_card");
const popupImage = modalWindowImage.querySelector(".popup__image");
const popupText = modalWindowImage.querySelector(".popup__text");
const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const addCardButton = document.querySelector(".profile__add-button");
const formElementEditProfile = modalWindowProfile.querySelector(".popup__form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameImput = document.querySelector(".popup__input_type_name");
const jobImput = document.querySelector(".popup__input_type_job");
const closeButtons = document.querySelectorAll(".popup__close");
const cardFormValidator = new FormValidator(config, formElementAddCard);
const profileFormValidator = new FormValidator(config, formElementEditProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = getCard(item);
      cardList.addItem(card);
    },
  },
  ".elements"
);

cardList.renderItems();

// const popupImage = new popupWithImage('.popup__image');
// popupImage.setEventListeners();

function openPopup(popup) {
  popup.classList.add("popup_is-active");
  document.addEventListener("keydown", closeOnEsc);
  document.addEventListener("mousedown", closeClickOnOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-active");
  document.removeEventListener("keydown", closeOnEsc);
  document.removeEventListener("mousedown", closeClickOnOverlay);
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function openImageCard(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupText.textContent = item.name;
  openPopup(modalWindowImage);
}

function handleAddCard(evt) {
  evt.preventDefault();
  listCards.prepend(
    getCard({ name: inputTitleAddCard.value, link: inputLinkAddCard.value })
  );
  formElementAddCard.reset();
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
  if (event.target.classList.contains("popup_is-active")) {
    closePopup(event.target);
  }
}

formElementAddCard.addEventListener("submit", handleAddCard);

editButtonProfile.addEventListener("click", function () {
  nameImput.value = profileTitle.textContent;
  jobImput.value = profileSubtitle.textContent;
  openPopup(modalWindowProfile);
  profileFormValidator.clearErrors();
});

addCardButton.addEventListener("click", function () {
  formElementAddCard.reset();
  openPopup(modalWindowAddCard);
  cardFormValidator.clearErrors();
});

formElementEditProfile.addEventListener("submit", submitFormProfile);

function getCard(item) {
  // const card = new Card(item, ".template", () => {popupImage.open(item)});
  const card = new Card(item, ".template", handlePhotoImage);
  const cardElement = card.generateCard();
  return cardElement;
}

// initialCards.forEach((item) => {
//   listCards.append(getCard(item));
// });
