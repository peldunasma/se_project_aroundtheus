import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";


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

function handleEscFunction(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".modal_opened");
    closeModal(openPopup);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscFunction);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscFunction);
}

function getCardElement(data) { 
  const cardElement = cardTemplate.cloneNode(true); 
  const cardImageEl = cardElement.querySelector(".card__image"); 
  const cardTitleEl = cardElement.querySelector(".card__description");

  cardImageEl.setAttribute("src", data.link); 
  cardImageEl.setAttribute("alt", data.name); 
  cardTitleEl.textContent = data.name; 

  cardImageEl.addEventListener("click", () => { 
    modalImage.setAttribute("src", data.link); 
    modalImage.setAttribute("alt", data.name); 
    imageModalDescription.textContent = data.name; 
    openModal(imageModalPopup); 

  }); 
    return cardElement; 

} 

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

const handleImageClick = (card) => {
  modalImage.src = card._link;
  modalImage.alt = card._name;
  imageModalDescription.textContent = card._name;  

  //open the image modal
  openModal(imageModalPopup);

}
function renderCard(data) {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard(
    {
      name,
      link,
    },
    cardListEl
  );
  closeModal(profileAddModal);
  addNewCardForm.reset();
  addCardFormValidator._toggleButtonState();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

//Edit profile

profileEditBtn.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// Add new card

addNewCardBtn.addEventListener("click", () => openModal(profileAddModal));
addNewCardForm.addEventListener("submit", handleAddCardSubmit);

//Keyboard events

profileEditModal.addEventListener("mousedown", function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("modal__close")
  ) {
    closeModal(profileEditModal);
  }
});

profileAddModal.addEventListener("mousedown", function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("modal__close")
  ) {
    closeModal(profileAddModal);
  }
});

imageModalPopup.addEventListener("mousedown", function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("modal__close")
  ) {
    closeModal(imageModalPopup);
  }
});

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

//* Card.js logic

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
}

const card = new Card(cardData, "#card-template", handleImageClick);
card.getView();

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
