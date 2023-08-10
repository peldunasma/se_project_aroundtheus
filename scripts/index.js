const initialCards = [
{
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
}, 
{
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
},
{
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
}, 
{
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
}, 
{
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
}, 
{
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
}
]; 


/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const cardTemplate = document.querySelector('#card-template').content.firstElementChild; 

//Wrappers
const cardListEl = document.querySelector('.cards__list');
const profileEditModal = document.querySelector('#profile-edit-modal');
const profileEditForm = profileEditModal.querySelector('.modal__form');
const profileAddModal = document.querySelector('#profile-add-modal');
const addNewCardForm = profileAddModal.querySelector('.modal__form');

//Buttons
const profileModalCloseBtn = profileEditModal.querySelector('.modal__close');
const addCardModalCloseBtn = profileAddModal.querySelector('.modal__close');
const profileEditBtn = document.querySelector('#profile-edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addNewCardBtn = document.querySelector('#profile-add-button'); 

//Form data
const profileNameInput = document.querySelector('#profile-name-input'); 
const profileDescriptionInput = document.querySelector('#profile-description-input');
const cardTitleInput = document.querySelector('.modal__input_type_title');
const cardUrlInput = document.querySelector('.modal__input_type_url');

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closeModal(modal){
    modal.classList.remove('modal_opened'); 
}

function openModal(modal){
    modal.classList.add('modal_opened'); 
}

function getCardElement(data) {
//clone the template element with all its content and store it in a cardElement variable
const cardElement = cardTemplate.cloneNode(true); 
//access the card title and image and store them in variables
const cardImageEl = cardElement.querySelector('.card__image');
const cardTitleEl = cardElement.querySelector('.card__description');
const likeBtn = cardElement.querySelector('.card__like-button');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('card__like-button_active');
});
//set the path to the image to the link field of the object
cardImageEl.setAttribute("src", data.link);
//set the image alt text to the name field of the object
cardImageEl.alt = data.name; 
//set the card title to the name field of the object, too
cardTitleEl.textContent = data.name;
//return the ready HTML element with the filled-in data 
return cardElement; 
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(evt){
    evt.preventDefault(); // prevents the page from refreshing 
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
}

function handleAddCardSubmit(evt){
    evt.preventDefault(); 

    const name = cardTitleInput.value;
    const link = cardUrlInput.value;
    const data = {name,link};
    renderCard(data, cardListEl);
    closeModal(profileAddModal);
}

function renderCard(data, cardContainerEl) {
    cardContainerEl.prepend(getCardElement(data))
}



/* -------------------------------------------------------------------------- */
/*                               Form Listeners                              */
/* -------------------------------------------------------------------------- */

//Edit profile
profileEditBtn.addEventListener('click', () => {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profileEditModal);
});
profileModalCloseBtn.addEventListener('click', () => closeModal(profileEditModal));
profileEditForm.addEventListener('submit', handleProfileEditSubmit);

// Add new card
addNewCardBtn.addEventListener('click', ()=> openModal(profileAddModal));
addCardModalCloseBtn.addEventListener('click', () => closeModal(profileAddModal));
addNewCardForm.addEventListener('submit', handleAddCardSubmit); 

initialCards.forEach((data) => {
const cardElement = getCardElement(data);
cardListEl.prepend(cardElement);
});

