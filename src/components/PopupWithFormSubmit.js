import Popup from "./Popup.js";

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
    //Assigned variable name
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._actionButton = this._popupElement.querySelector(".modal__button");
    this._actionButtonText = this._actionButton.textContent;
  }

  setActionText(submit, actionText = "Saving...") {
    if (submit) {
      this._actionButton.textContent = actionText;
    } else {
      this._actionButton.textContent = this._actionButtonText;
    }
  }

  setActionText(submit) {
    if (submit) {
      document.querySelector('#modal-avatar-submit').textContent = "Save";
      // this._actionButton.textContent = "Save";
    } else {
      // this._actionButton.text = "Saving...";
      document.querySelector('#modal-avatar-submit').textContent = "Saving...";
    }
  }

  setSubmitAction(action) {
    // takes function as argument
    // this function will used as the submission handler
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    // set submit listener and pass it the function from setSubmitAction
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
