//This creates a card with text and an image link, along with the appropriate handlers
//Purpose: intentded to replace getCardElement function

export default class Card {
  //constructor gets passed the following arguments: data, cardSelector, handleImageClick
  //example of code with parameter deconstructoring
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleLikeClick,
    handleDeleteClick
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this.id = _id;
    this._isLiked = isLiked;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this);
      });

    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this);
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        //passing this as an argument ensures that all data is passed to the handler (including: name and link of card)
        this._handleImageClick(this.getCardData());
      });
  }

  _renderCardLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  isLiked() {
    return this._isLiked;
  }

  setCardLikes(isLiked) {
    this._isLiked = isLiked;
    this._renderCardLikes();
  }

  getCardData() {
    return { name: this._name, link: this._link };
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  //returns a fully functional card element populated with the appropriate data
  getView() {
    //get card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__like-button");

    this._renderCardLikes();
    this._renderCard();
    this._setEventListeners();
    return this._cardElement;
  }

  _renderCard() {
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__description").textContent =
      this._name;
    //return the card
    return this._cardElement;
  }
}
