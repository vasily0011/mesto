export class Api {
  constructor(url) {
    this._url = url;
    this._headers = {
      authorization: "4939b81c-66db-439d-a731-f61a026bd167",
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  } 

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.popup__input_name,
        about: data.popup__input_job
      })
    })
    .then(this._checkResponse);
  }

  editUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.popup__input_avatar
      }),
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.popup__input_title,
        link: data.popup__link
      })
    })
    .then(this._checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers,
  })
  .then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers,
  })
  .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE', 
      headers: this._headers
    })
    .then(this._checkResponse);
  }
}
