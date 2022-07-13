export class UserInfo {
  constructor(profileTitleSelector, profileSubtitleSelector, avatarSelector) {
    this._profileTitleSelector = document.querySelector(profileTitleSelector);
    this._profileSubtitleSelector = document.querySelector(
      profileSubtitleSelector
    );
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const profileInfo = {
      name: this._profileTitleSelector.textContent,
      job: this._profileSubtitleSelector.textContent,
      avatar: this._avatarSelector.src,
    };
    return profileInfo;
  }

  setUserInfo(data) {
    this._profileTitleSelector.textContent = data.name;
    this._profileSubtitleSelector.textContent = data.job;
  }

  setUserAvatar(data) {
    this._avatarSelector.src = data.avatar;
  }

  getUserId() {
    return this._userId;
  }

  setUserId(userId) {
    this._userId = userId;
  }
}
