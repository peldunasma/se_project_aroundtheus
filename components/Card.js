export default class Card {
    constructor({ name, link }, cardSelector, handleImageClick) {
        this._name = name; 
        this._link = link; 
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;  
    }

    _setEventListeners() {
       //".card__like-button"
       this._cardElement
       .querySelector(".card__like-button")
       .addEventListener("click", () => { 
        this._handleLikeIcon();

       }); 
        
       //".card__delete-button"
       this._cardElement
       .querySelector(".card__delete-button")
       .addEventListener("click", () => { 
        this._handleDeleteIcon(); 
       });

      this._cardElement.querySelector(".card__image")
       .addEventListener("click", () => { 
        this._handleImageClick(this); 
       });
    }

    _handleLikeIcon() {
        this._cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_active");
    }

    _handleDeleteIcon() {
        this._cardElement.remove();
        //removes card from the DOM
        this._cardElement = null; 
    }

    getView() {
        //get card view
        this._cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);

        //set event listeners
        this._setEventListeners(); 

        this._cardElement.querySelector(".card__image").src = this._link;
        this._cardElement.querySelector(".card__image").alt = this._name;
        this._cardElement.querySelector(".card__description").textContent =
        this._name;
        //return the card
        return this._cardElement;  
    }
}