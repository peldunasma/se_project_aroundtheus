import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import API from "../components/Api.js";
import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";
import {
  cardTemplate,
  profileEditModal,
  profileAddModal,
  profileAvatarModal,
  profileEditForm,
  addNewCardForm,
  editAvatarElement,
  profileEditBtn,
  addNewCardBtn,
  profileNameInput,
  profileDescriptionInput,
  config,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                Constants                                   */
/* -------------------------------------------------------------------------- */

const api = new API({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
    "Content-Type": "application/json",
  },
});

const userData = new UserInfo(
  ".profile__name",
  ".profile__description",
  ".profile__image"
);

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
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, initialCards]) => {
    userData.setUserInfo(data.name, data.about);
    userData.setUserAvatar(data.avatar);
    cardSection = new Section(
      {
        items: initialCards.reverse(),
        renderer: (cardData) => {
          const cardElement = createCard(cardData);
          cardSection.addItem(cardElement);
        },
      },
      ".cards__list"
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

/* -------------------------------------------------------------------------- */
/*                           Update Avatar Image                              */
/* -------------------------------------------------------------------------- */

const editAvatarForm = new PopupWithForm("#profile-image-modal", (avatar) => {
  editAvatarForm.setActionText(true);
  // document.querySelector('#modal-avatar-submit').textContent = "Saving...";
  api
    .updateAvatar(avatar)
    .then((userInfo) => {
      userData.setUserAvatar(userInfo.avatar);
      document.querySelector("#modal-avatar-submit").textContent = "Save";
      editAvatarForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => editAvatarForm.setActionText(false));
});
editAvatarForm.setEventListeners();

const avatarButton = document.querySelector(".avatar-edit-button");
avatarButton.addEventListener("click", () => {
  editAvatarValidator.toggleButtonState();
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
  profileForm.setActionText(true);
  api
    .editProfile(data)
    .then((data) => {
      userData.setUserInfo(data.name, data.about);
      profileForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => profileForm.setActionText(false));
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
  addCardForm.setActionText(true);
  api
    .createNewCard(inputValues)
    .then((data) => {
      renderCard(data);
      addCardForm.close();
    })
    .catch((err) => {
      console.error(err); // log the error to the console
    })
    .finally(() => addCardForm.setActionText(false));
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
        card.setCardLikes(false);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .likeCard(card.id)
      .then(() => {
        card.setCardLikes(true);
      })
      .catch((err) => console.log(err));
  }
}

/* -------------------------------------------------------------------------- */
/*                          Delete Confirmation Form                          */
/* -------------------------------------------------------------------------- */

const deleteConfirmationModal = new PopupWithFormSubmit("#delete-card-modal");
deleteConfirmationModal.setEventListeners();

// pass this to card class
function handleDeleteClick(card) {
  deleteConfirmationModal.open();
  //asks user if they want to delete
  deleteConfirmationModal.setSubmitAction(() => {
    // handle card deletion
    deleteConfirmationModal.setActionText(true);
    api
      .deleteCard(card.id)
      .then(() => {
        deleteConfirmationModal.close();
        card.deleteCard();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => deleteConfirmationModal.setActionText(false));
  });
}
