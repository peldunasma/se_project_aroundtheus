import Popup from "./Popup.js";

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
    //Assigned variable name
    super({ popupSelector });
        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
}
    
    setSubmitAction(action) {
      // takes function as argument
      // this function will used as the submission handler
      this._handleFormSubmit = action;
    }
  
    setEventListeners() {
      // set submit listener and pass it the function from setSubmitAction
      this._popupForm.addEventListener('submit', (evt) => {
        this._handleFormSubmit();
       }); 
        super.setEventListeners(); 
    }
  }