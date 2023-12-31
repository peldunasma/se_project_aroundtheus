import Popup from "./Popup.js"; 

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        //instantiantes Popup class (parent class)
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupElement.querySelectorAll('.modal__input');

    }

    _getInputValues(){
        //create an empty array
        const inputValues = {};
        //create a forEach loop to take in the input values  
        this._inputList.forEach((input) => (inputValues[input.name] = input.value));
        return inputValues;

    }

    setEventListeners() {
       this._popupForm.addEventListener('submit', (evt) => {
        this._handleFormSubmit(this._getInputValues());
       }); 
        super.setEventListeners();      
    } 

    close() {
        this._popupForm.reset();
        super.close();
    }

}

