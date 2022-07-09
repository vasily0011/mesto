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

  setUserInfo(item) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        about: item.job
      })
    })
    .then(this._checkResponse);
  }
}
