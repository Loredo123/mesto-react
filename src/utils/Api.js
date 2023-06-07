class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(
      this._checkResponse
    );
  }

  getInitialCards() {
    return this._request("cards", {
      headers: this._headers,
    });
  }

  getUser() {
    return this._request("users/me", {
      headers: this._headers,
    });
  }

  editUser(user) {
    return this._request("users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      }),
    });
  }

  changeAvatar(avatar) {
    return this._request("users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    });
  }

  addCard(card) {
    return this._request("cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    });
  }

  deleteCard(id) {
    return this._request(`cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this._request(`cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    } else {
      return this._request(`cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "7cefef8e-0cb2-4688-be1f-f9c60ce55cca",
    "Content-Type": "application/json",
  },
});

export default api;
