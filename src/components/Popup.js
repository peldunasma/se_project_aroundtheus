export default class Popup {
    constructor({popupSelector}){
        this._popupElement = document.querySelector(popupSelector); 
        this._handleEscClose = this._handleEscClose; 
    }

    open() {
        //opens popup
        this._popupElement.classList.add("modal_opened");
        document.addEventListener("keydown", handleEscFunction); 
    }

    close() {
        //closes popup
        modal.classList.remove("modal_opened");
        document.removeEventListener("keydown", handleEscFunction);
    }

    _handleEscClose() {
        //listens for esc button
        if (evt.key === "Escape") {
            const openPopup = document.querySelector(".modal_opened");
            closeModal(openPopup);
          }
    }

    setEventListeners() {
        //sets event listeners 
        this._popupElement.addEventListener("mousedown", function (event) {
            if (
              event.target.classList.contains("modal") ||
              event.target.classList.contains("modal__close")
            ) {
              this.close();
            }
          });
    }
}