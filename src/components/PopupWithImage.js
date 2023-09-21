import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor({popupSelector}){
        super({ popupSelector });
        this._cardImage = this._popupElement.querySelector('.modal__image');
        this._cardDescription = this._popupElement.querySelector('.card__description')
    }
// a function with a single destructured parameter
    open({name, link}){
        super.open();
        this._cardDescription.textContent = name;
        this._cardImage.alt = name;
        this._cardImage.src = link;
    }
}