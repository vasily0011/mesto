export class UserInfo {
    constructor(profileTitleSelector, profileSubtitleSelector) {
        this._profileTitleSelector = document.querySelector(profileTitleSelector);
        this._profileSubtitleSelector = document.querySelector(profileSubtitleSelector);
    }

    getUserInfo() {
        const profileInfo = { name: this._profileTitleSelector.textContent, job: this._profileSubtitleSelector.textContent };
        return profileInfo;
    }

    setUserInfo(profileInfo) {
        this._profileTitleSelector.textContent = profileInfo.popup__input_name;
        this._profileSubtitleSelector.textContent = profileInfo.popup__input_job;
    }
}