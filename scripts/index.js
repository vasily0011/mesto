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

function render() {
  const cards = initialCards.map(getElementCard);
  listCards.append(...cards);
}

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

function getElementCard(item) {
  const elementTemplate = template.content.cloneNode(true);
  const nameCard = elementTemplate.querySelector(".element__title");
  const imageCard = elementTemplate.querySelector(".element__image");
  const removeButton = elementTemplate.querySelector(".element__button_delete");
  const likeButton = elementTemplate.querySelector(".element__button");
  const likeCard = () => {
    likeButton.classList.toggle("element__button_active");
  }
  const openImageCard = () => {
    popupImage.src = imageCard.src;
    popupImage.alt = nameCard.textContent;
    popupText.textContent = nameCard.textContent;
    openPopup(modalWindowImage);
  };

  nameCard.textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;

  removeButton.addEventListener("click", handleRemoveElement);

  likeButton.addEventListener("click", likeCard);

  imageCard.addEventListener("click", openImageCard);

  return elementTemplate;
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
  formElementAddCard.reset();
  disabledButton(popupFormSaveButton, config.disabledButtonClass);
  listCards.prepend(newCard);
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
  clearErrors(config, modalWindowProfile);
});

modalProfileCloseButton.addEventListener("click", function () {
  closePopup(modalWindowProfile);
});

addCardButton.addEventListener("click", function () {
  openPopup(modalWindowAddCard);
  clearErrors(config, modalWindowAddCard);
});

modalAddCardCloseButton.addEventListener("click", function () {
  closePopup(modalWindowAddCard);
});

formElementEditProfile.addEventListener("submit", submitFormProfile);

render();
