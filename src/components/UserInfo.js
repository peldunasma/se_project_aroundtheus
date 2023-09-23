//This class is responsible for rendering information about the user on the page

export default class UserInfo {
    //created two parameters 
    constructor(nameSelector, jobSelector) {
        //Assigned variable name
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
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
}