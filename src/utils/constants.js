export const api = new API({
    baseUrl: "https://around-api.en.tripleten-services.com/v1",
    headers: {
      authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
      "Content-Type": "application/json",
    },
  });
  
  export const userData = new UserInfo(
    ".profile__name",
    ".profile__description",
    ".profile__image"
  );
  
  export const cardTemplate =
    document.querySelector("#card-template").content.firstElementChild;
  
  // Wrappers
  
  export const profileEditModal = document.querySelector("#profile-edit-modal");
  export const profileAddModal = document.querySelector("#profile-add-modal");
  export const profileAvatarModal = document.querySelector("#profile-image-modal");
  export const profileEditForm = profileEditModal.querySelector(".modal__form");
  export const addNewCardForm = profileAddModal.querySelector(".modal__form");
  export const editAvatarElement = profileAvatarModal.querySelector(".modal__form");
  
  //Buttons
  
  export const profileEditBtn = document.querySelector("#profile-edit-button");
  export const addNewCardBtn = document.querySelector("#profile-add-button");
  
  //Inputs
  
  export const profileNameInput = profileEditForm.querySelector("#profile-name-input");
  export const profileDescriptionInput = profileEditForm.querySelector(
    "#profile-description-input"
  );

/* -------------------------------------------------------------------------- */
/*                              Form Validator                                */
/* -------------------------------------------------------------------------- */

export const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  
  export const addCardFormValidator = new FormValidator(config, addNewCardForm);
  addCardFormValidator.enableValidation();
  
  export const editCardFormValidator = new FormValidator(config, profileEditForm);
  editCardFormValidator.enableValidation();
  
  export const editAvatarValidator = new FormValidator(config, editAvatarElement);
  editAvatarValidator.enableValidation();