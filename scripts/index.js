const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const modalCloseButton = modalWindow.querySelector(".popup__close");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_is-active");
}

editButtonProfile.addEventListener("click", toggleModalWindow);

modalCloseButton.addEventListener("click", toggleModalWindow);

let formElement = modalWindow.querySelector(".popup__form");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameImput = document.querySelector(".popup__form-name");
let jobImput = document.querySelector(".popup__form-job");
let saveForm = document.querySelector(".popup__form-save");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameImput.value;
  profileSubtitle.textContent = jobImput.value;
  toggleModalWindow();
}

formElement.addEventListener("submit", formSubmitHandler);
