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

export const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  