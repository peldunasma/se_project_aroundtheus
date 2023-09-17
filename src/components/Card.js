//This creates a card with text and an image link, along with the appropriate handlers
//Purpose: intentded to replace getCardElement function

export default class Card {
  //constructor gets passed the following arguments: data, cardSelector, handleImageClick
  constructor({ name, link }, cardSelector, handleImageClick) {
    //an object containing the card's text and a link to its image 
    this._name = name;
    this._link = link;
    // a selector string for the corresponding <template> element
    this._cardSelector = cardSelector;
    //a function that handles the opening of the preview picture modal.
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

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        //passing this as an argument ensures that all data is passed to the handler (including: name and link of card) 
        this._handleImageClick(this);
      });
  }

  getCardData() {
    return { name: this._name, link: this._link };
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

  //returns a fully functional card element populated with the appropriate data 
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
