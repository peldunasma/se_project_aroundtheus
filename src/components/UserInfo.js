//This class is responsible for rendering information about the user on the page

export default class UserInfo {
    //created two parameters 
    constructor(nameSelector, jobSelector, avatarSelector) {
        //Assigned variable name
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent, 
            job: this._jobSelector.textContent
        };
    }

    setUserInfo(name, job) {
        this._nameSelector.textContent = name;
        this._jobSelector.textContent = job;
    }

    setUserAvatar(avatar) {
        this._avatarSelector.src = avatar;
    }
}