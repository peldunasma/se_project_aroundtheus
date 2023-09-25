import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardListEl = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardForm = profileAddModal.querySelector(".modal__form");
const imageModalPopup = document.querySelector("#modal-image");

//Buttons and other DOM nodes

const profileModalCloseBtn = profileEditModal.querySelector(".modal__close");
const addCardModalCloseBtn = profileAddModal.querySelector(".modal__close");
const imageModalCloseBtn = imageModalPopup.querySelector(".modal__close");
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const addNewCardBtn = document.querySelector("#profile-add-button");
const imageModalDescription = document.querySelector(
  ".modal__image-description"
);

//Form data

const profileNameInput = profileEditForm.querySelector("#profile-name-input");
const profileDescriptionInput = profileEditForm.querySelector(
  "#profile-description-input"
);
const cardTitleInput = addNewCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addNewCardForm.querySelector(".modal__input_type_url");
const modalImage = imageModalPopup.querySelector(".modal__image");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  // call the section's addItem method
  cardSection.addItem(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

//* FormValidator.js logic

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const addCardFormValidator = new FormValidator(config, addNewCardForm);
addCardFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(config, profileEditForm);
editCardFormValidator.enableValidation();

//Section.js

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);
cardSection.renderItems();

//popupWithForm.js (Edit Form)

profileEditBtn.addEventListener("click", () => {
  const info = userData.getUserInfo();
  profileNameInput.value = info.name;
  profileDescriptionInput.value = info.job;
  profileForm.open();
});

const profileForm = new PopupWithForm("#profile-edit-modal", (data) => {
  userData.setUserInfo(data.name, data.description);
  profileForm.close();
});
profileForm.setEventListeners();

//popupWithForm.js (Add Form)

addNewCardBtn.addEventListener("click", () => {
  addCardFormValidator.toggleButtonState();
  addCardForm.open();
});

const addCardForm = new PopupWithForm("#profile-add-modal", (cardData) => {
  //new card render card
  renderCard(cardData);
  addCardForm.close();
});
addCardForm.setEventListeners();

//popupWithImage.js

const popupImage = new PopupWithImage({ popupSelector: "#modal-image" });
popupImage.setEventListeners();

function handleImageClick(cardData) {
  popupImage.open(cardData);
}

//UserInfo.js

const userData = new UserInfo(".profile__name", ".profile__description");
