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
const modalWindowAddCard = document.querySelector(".popup_add-Card");

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

function render() {
  const html = initialCards.map(getElement);
  listCard.append(...html);
}

function togglemodalWindowImage() {
  modalWindowImage.classList.toggle("popup_is-active");
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const nameCard = getElementTemplate.querySelector(".element__title");
  const imageCard = getElementTemplate.querySelector(".element__image");
  const removeButton = getElementTemplate.querySelector(
    ".element__button_delete"
  );
  const likeButton = getElementTemplate.querySelector(".element__button");

  nameCard.textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;

  removeButton.addEventListener("click", handleremoveElement);

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__button_active");
  });
    imageCard.addEventListener("click",  function() {
      popupImage.src = imageCard.src;
      popupText.textContent = nameCard.textContent;
      togglemodalWindowImage();

      modalImageCloseButton.addEventListener("click", togglemodalWindowImage);

    });


  return getElementTemplate;
}


function handleremoveElement(evt) {
  const element = evt.target.closest(".element");
  element.remove();
}

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = getElement({
    name: inputTitleAddCard.value,
    link: inputLinkAddCard.value,
  });
  toggleModalWindowAddCard();
  inputTitleAddCard.value = "";
  inputLinkAddCard.value = "";
  listCard.prepend(newCard);
}

render();

const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const modalProfileCloseButton =
  modalWindowProfile.querySelector(".popup__close");
const addCardButton = document.querySelector(".profile__add-button");


function toggleModalWindowAddCard() {
  modalWindowAddCard.classList.toggle("popup_is-active");
}

popupFormSaveButton.addEventListener("click", handleAddCard);

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
