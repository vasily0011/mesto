const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const listCard = document.querySelector(".elements");
const template = document.querySelector(".template");

function render() {
  const html = initialCards.map(getElement);
  listCard.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const nameCard = getElementTemplate.querySelector(".element__title");
  const imageCard = getElementTemplate.querySelector(".element__image");
  nameCard.textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;
  return getElementTemplate;
}

render();

const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup__edit_profile");
const modalProfileCloseButton =
  modalWindowProfile.querySelector(".popup__close");
const addCardButton = document.querySelector(".profile__add-button");
const modalWindowAddCard = document.querySelector(".popup__add_card");
const modalAddCardCloseButton =
  modalWindowAddCard.querySelector(".popup__close");

function toggleModalWindowAddCard() {
  modalWindowAddCard.classList.toggle("popup_is-active");
}

function toggleModalWindowProfile() {
  if (modalWindowProfile.classList.contains("popup_is-active")) {
    modalWindowProfile.classList.toggle("popup_is-active");
  } else {
    modalWindowProfile.classList.toggle("popup_is-active");
    nameImput.value = profileTitle.textContent;
    jobImput.value = profileSubtitle.textContent;
  }
}

editButtonProfile.addEventListener("click", toggleModalWindowProfile);

modalProfileCloseButton.addEventListener("click", toggleModalWindowProfile);

addCardButton.addEventListener("click", toggleModalWindowAddCard);

modalAddCardCloseButton.addEventListener("click", toggleModalWindowAddCard);

let formElement = modalWindowProfile.querySelector(".popup__form");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameImput = document.querySelector(".popup__input_type_name");
let jobImput = document.querySelector(".popup__input_type_job");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameImput.value;
  profileSubtitle.textContent = jobImput.value;
  toggleModalWindowProfile();
}

formElement.addEventListener("submit", formSubmitHandler);
