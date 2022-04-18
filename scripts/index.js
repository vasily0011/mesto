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

const listCards = document.querySelector(".elements");
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
const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const modalProfileCloseButton =
  modalWindowProfile.querySelector(".popup__close");
const addCardButton = document.querySelector(".profile__add-button");
const formElement = modalWindowProfile.querySelector(".popup__form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameImput = document.querySelector(".popup__input_type_name");
const jobImput = document.querySelector(".popup__input_type_job");

function render() {
  const html = initialCards.map(getElementCard);
  listCards.append(...html);
}

function openPopup(popup) {
  popup.classList.add("popup_is-active");
}

function closePopup(popup) {
  popup.classList.remove("popup_is-active");
}

// function togglemodalWindowImage() {
//   modalWindowImage.classList.toggle("popup_is-active");
// }

function getElementCard(item) {
  const ElementTemplate = template.content.cloneNode(true);
  const nameCard = ElementTemplate.querySelector(".element__title");
  const imageCard = ElementTemplate.querySelector(".element__image");
  const removeButton = ElementTemplate.querySelector(".element__button_delete");
  const likeButton = ElementTemplate.querySelector(".element__button");

  nameCard.textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;

  removeButton.addEventListener("click", handleRemoveElement);

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__button_active");
  });

  imageCard.addEventListener("click", function () {
    popupImage.src = imageCard.src;
    popupImage.alt = nameCard.textContent;
    popupText.textContent = nameCard.textContent;
    openPopup(modalWindowImage);
  });

  return ElementTemplate;
}

function handleRemoveElement(evt) {
  const element = evt.target.closest(".element");
  element.remove();
}

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = getElementCard({
    name: inputTitleAddCard.value,
    link: inputLinkAddCard.value,
  });
  inputTitleAddCard.value = "";
  inputLinkAddCard.value = "";
  listCards.prepend(newCard);
  closePopup(modalWindowAddCard);
}

function submitFormProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameImput.value;
  profileSubtitle.textContent = jobImput.value;
  closePopup(modalWindowProfile);
}

// function toggleModalWindowAddCard() {
//   modalWindowAddCard.classList.toggle("popup_is-active");
// }
modalImageCloseButton.addEventListener("click", function () {
  closePopup(modalWindowImage);
});

popupFormSaveButton.addEventListener("click", handleAddCard);

// function toggleModalWindowProfile() {
//   if (modalWindowProfile.classList.contains("popup_is-active")) {
//     modalWindowProfile.classList.toggle("popup_is-active");
//   } else {
//     modalWindowProfile.classList.toggle("popup_is-active");
//     nameImput.value = profileTitle.textContent;
//     jobImput.value = profileSubtitle.textContent;
//   }
// }

editButtonProfile.addEventListener("click", function () {
  nameImput.value = profileTitle.textContent;
  jobImput.value = profileSubtitle.textContent;
  openPopup(modalWindowProfile);
});

modalProfileCloseButton.addEventListener("click", function () {
  closePopup(modalWindowProfile);
});

addCardButton.addEventListener("click", function () {
  openPopup(modalWindowAddCard);
});

modalAddCardCloseButton.addEventListener("click", function () {
  closePopup(modalWindowAddCard);
});

formElement.addEventListener("submit", submitFormProfile);

render();