import './index.css';
import { config } from '../constants/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';



const modalWindowAddCard = document.querySelector(".popup_add-Card");
const formElementAddCard = modalWindowAddCard.querySelector('.popup__form');
const buttonEditAvatar = document.querySelector('.profile__overlay');
const editButtonProfile = document.querySelector(".profile__edit-button");
const modalWindowProfile = document.querySelector(".popup_edit-profile");
const addCardButton = document.querySelector(".profile__add-button");
const formElementEditProfile = modalWindowProfile.querySelector(".popup__form");
const avatarEditModalWindow = document.querySelector(".popup_edit-avatar");
const formElementAvatar = avatarEditModalWindow.querySelector(".popup__form")
const profileTitleSelector = document.querySelector(".profile__title");
const profileSubtitleSelector = document.querySelector(".profile__subtitle");
const nameImput = document.querySelector(".popup__input_type_name");
const jobImput = document.querySelector(".popup__input_type_job");
const cardFormValidator = new FormValidator(config, formElementAddCard);
const profileFormValidator = new FormValidator(config, formElementEditProfile);
const avatarFormValidator = new FormValidator(config, formElementAvatar);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();
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

const popupEditUserAvatar = new PopupWithForm('.popup_edit-avatar', {
  submitForm: (data) => {
    popupEditUserAvatar.renderLoading(true, 'Сохранить', 'Cохранение...');
    api
      .editUserAvatar(data)
      .then(() => {
        userInfo.setUserInfo({
          avatar: data.popup__input_avatar
        });
        popupEditUserAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditUserAvatar.renderLoading(false, 'Сохранить', 'Cохранение...');
      });
  },
});


const popupEditProfile = new PopupWithForm('.popup_edit-profile', { submitForm: (data) => {
  popupEditProfile.renderLoading(true, 'Сохранить', 'Cохранение...')
  api.setUserInfo(data)
    .then(() => {
      popupEditProfile.close();
        return userInfo.setUserInfo(
          {name: data.popup__input_name,
          job: data.popup__input_job
          });
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditProfile.renderLoading(false, 'Сохранить', 'Cохранение...')})
}});


const popupAddCard = new PopupWithForm('.popup_add-Card', { submitForm: (data) => {
  popupAddCard.renderLoading(true, 'Создать', 'Cохранение...')
  api.addNewCard(data)
    .then(data => {
      popupAddCard.close();
      return cardList.addItem(getCard(data));
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAddCard.renderLoading(false, 'Создать', 'Cохранение...')
    })
}});

addCardButton.addEventListener('click', () => {
  cardFormValidator.clearErrors();
  popupAddCard.open();
})

buttonEditAvatar.addEventListener("click", () => {
  popupEditUserAvatar.open();
  avatarFormValidator.clearErrors();
});

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
popupEditUserAvatar.setEventListeners();
