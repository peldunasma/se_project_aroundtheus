export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose;
  }

  open() {
    //opens popup
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    //closes popup
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  //arrow function would allow the context of this to remain the same instead of .bind
  _handleEscClose = (evt) => {
    //listens for esc button
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    //sets event listeners
    this._popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("modal") ||
        event.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
