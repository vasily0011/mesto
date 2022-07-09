import './index.css';
import { config } from '../constants/constants.js';
import { Card } from '../components/Card.js';
import { initialCards } from '../constants/dataCards.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';



// const listCards = document.querySelector(".elements");
const modalWindowAddCard = document.querySelector(".popup_add-Card");
const formElementAddCard = modalWindowAddCard.querySelector('.popup__form');
// const popupFormSaveButton =
//   modalWindowAddCard.querySelector(".popup__form-save");
const inputTitleAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_title"
);
const inputLinkAddCard = modalWindowAddCard.querySelector(
  ".popup__input_type_link"
);
// const modalWindowImage = document.querySelector(".popup_card");
// const popupImage = modalWindowImage.querySelector(".popup__image");
// const popupText = modalWindowImage.querySelector(".popup__text");
const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const addCardButton = document.querySelector(".profile__add-button");
const formElementEditProfile = modalWindowProfile.querySelector(".popup__form");
const profileTitleSelector = document.querySelector(".profile__title");
const profileSubtitleSelector = document.querySelector(".profile__subtitle");
const nameImput = document.querySelector(".popup__input_type_name");
const jobImput = document.querySelector(".popup__input_type_job");
const closeButtons = document.querySelectorAll('.popup__close');
const cardFormValidator = new FormValidator(config, formElementAddCard);
const profileFormValidator = new FormValidator(config, formElementEditProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
let userId = null;

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      avatar: userData.avatar
    });
    userId = userData._id

    cardList.renderItems(cards);
  })
  .catch(err => {console.log(err)});


function getCard (data) {
  const card = new Card(data, '.template', () => { (popupImage.open(data)) }, userId);
  const cardElement = card.generateCard();
  return cardElement
}


const userInfo = new UserInfo(".profile__title", ".profile__subtitle", ".profile__img")

const popupImage = new PopupWithImage('.popup_card');
const popupEditProfile = new PopupWithForm('.popup_edit-profile', {
  submitForm: (item) => {
    userInfo.setUserInfo(item);
    popupEditProfile.close();
  }
})

const popupAddCard = new PopupWithForm('.popup_add-Card', {
  submitForm: (item) => {
    cardList.addItem(getCard({name: item['popup__input_title'], link: item['popup__link']}));
    popupAddCard.close();
  }
})

addCardButton.addEventListener('click', () => {
  cardFormValidator.clearErrors();
  popupAddCard.open();
})

editButtonProfile.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameImput.value = userData.name;
  jobImput.value = userData.job;
  popupEditProfile.open();
  profileFormValidator.clearErrors();
});



  const cardList = new Section(
    {
      renderer: (item) => {
        const card = getCard(item);
        cardList.addItem(card);
      },
    },
    ".elements"
  );


popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();


