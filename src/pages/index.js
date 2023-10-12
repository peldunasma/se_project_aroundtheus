import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import API from "../components/Api.js";
import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";

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
/*                                Constants                                   */
/* -------------------------------------------------------------------------- */

const api = new API({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  authToken: "f01bb77e-1c08-4def-8c31-263c2557aed9",
});

const userData = new UserInfo(
  ".profile__name",
  ".profile__description",
  ".profile__image"
);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardListEl = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAvatarModal = document.querySelector("#profile-image-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardForm = profileAddModal.querySelector(".modal__form");
const editAvatarElement = profileAvatarModal.querySelector(".modal__form");
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
/*                              Render Cards                                  */
/* -------------------------------------------------------------------------- */

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleLikeClick,
    handleDeleteClick
  );
  return card.getView();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  // call the section's addItem method
  cardSection.addItem(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                              Form Validator                                */
/* -------------------------------------------------------------------------- */

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

const editAvatarValidator = new FormValidator(config, editAvatarElement);
editAvatarValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                      Section class and Promise                             */
/* -------------------------------------------------------------------------- */

let cardSection;
Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([data, initialCards]) => {
    userData.setUserInfo(data.name, data.about);
    userData.setUserAvatar(data.avatar);
    cardSection = new Section(
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
  }
);

/* -------------------------------------------------------------------------- */
/*                           Update Avatar Image                              */
/* -------------------------------------------------------------------------- */

const editAvatarForm = new PopupWithForm("#profile-image-modal", (avatar) => {
  api
    .updateAvatar(avatar)
    .then((userInfo) => {
      userData.setUserAvatar(userInfo.avatar);
      editAvatarForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
});
editAvatarForm.setEventListeners();

const avatarButton = document.querySelector(".avatar-edit-button");
avatarButton.addEventListener("click", () => {
  editAvatarForm.open();
});

/* -------------------------------------------------------------------------- */
/*                             Edit Profile Form                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", () => {
  const info = userData.getUserInfo();
  profileNameInput.value = info.name;
  profileDescriptionInput.value = info.job;
  profileForm.open();
});

const profileForm = new PopupWithForm("#profile-edit-modal", (data) => {
  api
    .editProfile(data)
    .then((data) => {
      userData.setUserInfo(data.name, data.about);
      profileForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
});
profileForm.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                              Add Card Form                                 */
/* -------------------------------------------------------------------------- */

addNewCardBtn.addEventListener("click", () => {
  addCardFormValidator.toggleButtonState();
  addCardForm.open();
});

const addCardForm = new PopupWithForm("#profile-add-modal", (inputValues) => {
  api
    .createNewCard(inputValues)
    .then((data) => {
      renderCard(data);
      addCardForm.close();
    })
    .catch((err) => {
      console.error(err); // log the error to the console
    });
});
addCardForm.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                          PopupWithImage Class                              */
/* -------------------------------------------------------------------------- */

const popupImage = new PopupWithImage({ popupSelector: "#modal-image" });
popupImage.setEventListeners();

function handleImageClick(cardData) {
  popupImage.open(cardData);
}

/* -------------------------------------------------------------------------- */
/*                                 Card Likes                                 */
/* -------------------------------------------------------------------------- */

function handleLikeClick(card) {
  if (card.isLiked()) {
    api
      .dislikeCard(card.id)
      .then(() => {
        card.setLikes(false);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .likeCard(card.id)
      .then(() => {
        card.setLikes(true);
      })
      .catch((err) => console.log(err));
  }
}

/* -------------------------------------------------------------------------- */
/*                          Delete Confirmation Form                          */
/* -------------------------------------------------------------------------- */

const deleteConfirmation = new PopupWithFormSubmit({popupSelector: "#delete-card-modal"})
deleteConfirmation.setEventListeners();

// pass this to card class
function handleDeleteClick(card) {
  deleteConfirmation.open();
  deleteConfirmation.setSubmitAction(() => {
    // handle card deletion
    api
    .deleteCard(card.id)
    .then(() => {
      deleteConfirmation.close();
      card.deleteCard();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => deleteConfirmation.setSubmitAction(false));
  })
}
