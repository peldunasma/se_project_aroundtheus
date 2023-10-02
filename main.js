!function(){"use strict";class e{constructor(e,t,s){let{name:o,link:r}=e;this._name=o,this._link=r,this._cardSelector=t,this._handleImageClick=s}_setEventListeners(){this._cardElement.querySelector(".card__like-button").addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__delete-button").addEventListener("click",(()=>{this._handleDeleteIcon()})),this._cardElement.querySelector(".card__image").addEventListener("click",(()=>{this._handleImageClick(this.getCardData())}))}getCardData(){return{name:this._name,link:this._link}}_handleLikeIcon(){this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active")}_handleDeleteIcon(){this._cardElement.remove(),this._cardElement=null}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._setEventListeners(),this._cardElement.querySelector(".card__image").src=this._link,this._cardElement.querySelector(".card__image").alt=this._name,this._cardElement.querySelector(".card__description").textContent=this._name,this._cardElement}}class t{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formEl=t}_showInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_checkFormValidity=()=>this._inputEls.every((e=>e.validity.valid));_disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}_enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}toggleButtonState(){this._checkFormValidity()?this._enableButton():this._disableButton()}_setEventListeners(){this._inputEls=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._submitButton=this._formEl.querySelector(this._submitButtonSelector),this._inputEls.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this.toggleButtonState()}))}))}enableValidation(){this._formEl.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popupElement.addEventListener("mousedown",(e=>{(e.target.classList.contains("modal")||e.target.classList.contains("modal__close"))&&this.close()}))}}class o extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t,this._inputList=this._popupElement.querySelectorAll(".modal__input")}_getInputValues(){const e={};return this._inputList.forEach((t=>e[t.name]=t.value)),e}setEventListeners(){this._popupForm.addEventListener("submit",(e=>{this._handleFormSubmit(this._getInputValues())})),super.setEventListeners()}close(){this._popupForm.reset(),super.close()}}document.querySelector("#card-template").content.firstElementChild,document.querySelector(".cards__list");const r=document.querySelector("#profile-edit-modal"),n=document.querySelector("#profile-add-modal"),i=r.querySelector(".modal__form"),l=n.querySelector(".modal__form"),a=document.querySelector("#modal-image"),c=(r.querySelector(".modal__close"),n.querySelector(".modal__close"),a.querySelector(".modal__close"),document.querySelector("#profile-edit-button")),u=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector("#profile-add-button")),d=(document.querySelector(".modal__image-description"),i.querySelector("#profile-name-input")),_=i.querySelector("#profile-description-input");function m(t){return new e(t,"#card-template",v).getView()}l.querySelector(".modal__input_type_title"),l.querySelector(".modal__input_type_url"),a.querySelector(".modal__image");const p={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},h=new t(p,l);h.enableValidation(),new t(p,i).enableValidation();const E=new class{constructor(e,t){let{items:s,renderer:o}=e;this._items=s,this._renderer=o,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=m(e);E.addItem(t)}},".cards__list");E.renderItems(),c.addEventListener("click",(()=>{const e=f.getUserInfo();d.value=e.name,_.value=e.job,S.open()}));const S=new o("#profile-edit-modal",(e=>{f.setUserInfo(e.name,e.description),S.close()}));S.setEventListeners(),u.addEventListener("click",(()=>{h.toggleButtonState(),y.open()}));const y=new o("#profile-add-modal",(e=>{!function(e){const t=m(e);E.addItem(t)}(e),y.close()}));y.setEventListeners();const g=new class extends s{constructor(e){let{popupSelector:t}=e;super({popupSelector:t}),this._cardImage=this._popupElement.querySelector(".modal__image"),this._cardDescription=this._popupElement.querySelector(".modal__image-description")}open(e){let{name:t,link:s}=e;super.open(),this._cardDescription.textContent=t,this._cardImage.alt=t,this._cardImage.src=s}}({popupSelector:"#modal-image"});function v(e){g.open(e)}g.setEventListeners();const f=new class{constructor(e,t){this._nameSelector=document.querySelector(e),this._jobSelector=document.querySelector(t)}getUserInfo(){return{name:this._nameSelector.textContent,job:this._jobSelector.textContent}}setUserInfo(e,t){this._nameSelector.textContent=e,this._jobSelector.textContent=t}}(".profile__name",".profile__description")}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBR2UsTUFBTUEsRUFHbkJDLFdBQUFBLENBQVdDLEVBQWlCQyxFQUFjQyxHQUFrQixJQUFoRCxLQUFFQyxFQUFJLEtBQUVDLEdBQU1KLEVBRXhCSyxLQUFLQyxNQUFRSCxFQUNiRSxLQUFLRSxNQUFRSCxFQUViQyxLQUFLRyxjQUFnQlAsRUFFckJJLEtBQUtJLGtCQUFvQlAsQ0FDM0IsQ0FFQVEsa0JBQUFBLEdBRUVMLEtBQUtNLGFBQ0ZDLGNBQWMsc0JBQ2RDLGlCQUFpQixTQUFTLEtBQ3pCUixLQUFLUyxpQkFBaUIsSUFJMUJULEtBQUtNLGFBQ0ZDLGNBQWMsd0JBQ2RDLGlCQUFpQixTQUFTLEtBQ3pCUixLQUFLVSxtQkFBbUIsSUFHNUJWLEtBQUtNLGFBQ0ZDLGNBQWMsZ0JBQ2RDLGlCQUFpQixTQUFTLEtBRXpCUixLQUFLSSxrQkFBa0JKLEtBQUtXLGNBQWMsR0FFaEQsQ0FFQUEsV0FBQUEsR0FDRSxNQUFPLENBQUViLEtBQU1FLEtBQUtDLE1BQU9GLEtBQU1DLEtBQUtFLE1BQ3hDLENBRUFPLGVBQUFBLEdBQ0VULEtBQUtNLGFBQ0ZDLGNBQWMsc0JBQ2RLLFVBQVVDLE9BQU8sMkJBQ3RCLENBRUFILGlCQUFBQSxHQUNFVixLQUFLTSxhQUFhUSxTQUVsQmQsS0FBS00sYUFBZSxJQUN0QixDQUdBUyxPQUFBQSxHQWVFLE9BYkFmLEtBQUtNLGFBQWVVLFNBQ2pCVCxjQUFjUCxLQUFLRyxlQUNuQmMsUUFBUVYsY0FBYyxTQUN0QlcsV0FBVSxHQUdibEIsS0FBS0sscUJBRUxMLEtBQUtNLGFBQWFDLGNBQWMsZ0JBQWdCWSxJQUFNbkIsS0FBS0UsTUFDM0RGLEtBQUtNLGFBQWFDLGNBQWMsZ0JBQWdCYSxJQUFNcEIsS0FBS0MsTUFDM0RELEtBQUtNLGFBQWFDLGNBQWMsc0JBQXNCYyxZQUN0RHJCLEtBQUtDLE1BRUVELEtBQUtNLFlBQ2QsRUN0RWEsTUFBTWdCLEVBS25CNUIsV0FBQUEsQ0FBWTZCLEVBQVNDLEdBQ25CeEIsS0FBS3lCLGVBQWlCRixFQUFRRyxjQUM5QjFCLEtBQUsyQixzQkFBd0JKLEVBQVFLLHFCQUNyQzVCLEtBQUs2QixxQkFBdUJOLEVBQVFPLG9CQUNwQzlCLEtBQUsrQixpQkFBbUJSLEVBQVFTLGdCQUNoQ2hDLEtBQUtpQyxZQUFjVixFQUFRVyxXQUMzQmxDLEtBQUttQyxRQUFVWCxDQUNqQixDQUVBWSxlQUFBQSxDQUFnQkMsR0FDZCxNQUFNQyxFQUFpQnRDLEtBQUttQyxRQUFRNUIsY0FBZSxJQUFHOEIsRUFBUUUsWUFDOURGLEVBQVF6QixVQUFVNEIsSUFBSXhDLEtBQUsrQixrQkFDM0JPLEVBQWVqQixZQUFjZ0IsRUFBUUksa0JBQ3JDSCxFQUFlMUIsVUFBVTRCLElBQUl4QyxLQUFLaUMsWUFDcEMsQ0FFQVMsZUFBQUEsQ0FBZ0JMLEdBQ2QsTUFBTUMsRUFBaUJ0QyxLQUFLbUMsUUFBUTVCLGNBQWUsSUFBRzhCLEVBQVFFLFlBQzlERixFQUFRekIsVUFBVUUsT0FBT2QsS0FBSytCLGtCQUM5Qk8sRUFBZWpCLFlBQWMsR0FDN0JpQixFQUFlMUIsVUFBVUUsT0FBT2QsS0FBS2lDLFlBQ3ZDLENBR0FVLG1CQUFBQSxDQUFvQk4sR0FDYkEsRUFBUU8sU0FBU0MsTUFHcEI3QyxLQUFLMEMsZ0JBQWdCTCxHQUZyQnJDLEtBQUtvQyxnQkFBZ0JDLEVBSXpCLENBRUFTLG1CQUFzQkEsSUFBTTlDLEtBQUsrQyxVQUFVQyxPQUFNQyxHQUFTQSxFQUFNTCxTQUFTQyxRQUV6RUssY0FBQUEsR0FDRWxELEtBQUttRCxjQUFjdkMsVUFBVTRCLElBQUl4QyxLQUFLNkIsc0JBQ3RDN0IsS0FBS21ELGNBQWNDLFVBQVcsQ0FDaEMsQ0FFQUMsYUFBQUEsR0FDRXJELEtBQUttRCxjQUFjdkMsVUFBVUUsT0FBT2QsS0FBSzZCLHNCQUN6QzdCLEtBQUttRCxjQUFjQyxVQUFXLENBQ2hDLENBRUFFLGlCQUFBQSxHQUNzQnRELEtBQUs4QyxxQkFHdkI5QyxLQUFLcUQsZ0JBRUxyRCxLQUFLa0QsZ0JBRVQsQ0FFQTdDLGtCQUFBQSxHQUNFTCxLQUFLK0MsVUFBWVEsTUFBTUMsS0FDckJ4RCxLQUFLbUMsUUFBUXNCLGlCQUFpQnpELEtBQUt5QixpQkFFckN6QixLQUFLbUQsY0FBZ0JuRCxLQUFLbUMsUUFBUTVCLGNBQWNQLEtBQUsyQix1QkFFckQzQixLQUFLK0MsVUFBVVcsU0FBU3JCLElBQ3RCQSxFQUFRN0IsaUJBQWlCLFNBQVVtRCxJQUNqQzNELEtBQUsyQyxvQkFBb0JOLEdBQ3pCckMsS0FBS3NELG1CQUFtQixHQUN4QixHQUVOLENBR0FNLGdCQUFBQSxHQUNFNUQsS0FBS21DLFFBQVEzQixpQkFBaUIsVUFBV21ELElBQ3ZDQSxFQUFJRSxnQkFBZ0IsSUFHdEI3RCxLQUFLSyxvQkFDUCxFQ2xGYSxNQUFNeUQsRUFDbkJwRSxXQUFBQSxDQUFXQyxHQUFvQixJQUFuQixjQUFFb0UsR0FBZXBFLEVBQzNCSyxLQUFLZ0UsY0FBZ0JoRCxTQUFTVCxjQUFjd0QsR0FDNUMvRCxLQUFLaUUsZ0JBQWtCakUsS0FBS2lFLGVBQzlCLENBRUFDLElBQUFBLEdBRUVsRSxLQUFLZ0UsY0FBY3BELFVBQVU0QixJQUFJLGdCQUNqQ3hCLFNBQVNSLGlCQUFpQixVQUFXUixLQUFLaUUsZ0JBQzVDLENBRUFFLEtBQUFBLEdBRUVuRSxLQUFLZ0UsY0FBY3BELFVBQVVFLE9BQU8sZ0JBQ3BDRSxTQUFTb0Qsb0JBQW9CLFVBQVdwRSxLQUFLaUUsZ0JBQy9DLENBRUFBLGdCQUFtQk4sSUFFRCxXQUFaQSxFQUFJVSxLQUNOckUsS0FBS21FLE9BQ1AsRUFHRkcsaUJBQUFBLEdBRUV0RSxLQUFLZ0UsY0FBY3hELGlCQUFpQixhQUFjK0QsS0FFOUNBLEVBQU1DLE9BQU81RCxVQUFVNkQsU0FBUyxVQUNoQ0YsRUFBTUMsT0FBTzVELFVBQVU2RCxTQUFTLGtCQUVoQ3pFLEtBQUttRSxPQUNQLEdBRUosRUNqQ2EsTUFBTU8sVUFBc0JaLEVBQ3ZDcEUsV0FBQUEsQ0FBWXFFLEVBQWVZLEdBRXZCQyxNQUFNLENBQUViLGtCQUNSL0QsS0FBSzZFLFdBQWE3RSxLQUFLZ0UsY0FBY3pELGNBQWMsZ0JBQ25EUCxLQUFLOEUsa0JBQW9CSCxFQUN6QjNFLEtBQUsrRSxXQUFhL0UsS0FBS2dFLGNBQWNQLGlCQUFpQixnQkFFMUQsQ0FFQXVCLGVBQUFBLEdBRUksTUFBTUMsRUFBYyxDQUFDLEVBR3JCLE9BREFqRixLQUFLK0UsV0FBV3JCLFNBQVNULEdBQVdnQyxFQUFZaEMsRUFBTW5ELE1BQVFtRCxFQUFNaUMsUUFDN0RELENBRVgsQ0FFQVgsaUJBQUFBLEdBQ0d0RSxLQUFLNkUsV0FBV3JFLGlCQUFpQixVQUFXbUQsSUFDM0MzRCxLQUFLOEUsa0JBQWtCOUUsS0FBS2dGLGtCQUFrQixJQUU5Q0osTUFBTU4sbUJBQ1YsQ0FFQUgsS0FBQUEsR0FDSW5FLEtBQUs2RSxXQUFXTSxRQUNoQlAsTUFBTVQsT0FDVixFQ1NGbkQsU0FBU1QsY0FBYyxrQkFBa0JVLFFBQVFtRSxrQkFJaENwRSxTQUFTVCxjQUFjLGdCQXBDMUMsTUFxQ004RSxFQUFtQnJFLFNBQVNULGNBQWMsdUJBQzFDK0UsRUFBa0J0RSxTQUFTVCxjQUFjLHNCQUN6Q2dGLEVBQWtCRixFQUFpQjlFLGNBQWMsZ0JBQ2pEaUYsRUFBaUJGLEVBQWdCL0UsY0FBYyxnQkFDL0NrRixFQUFrQnpFLFNBQVNULGNBQWMsZ0JBT3pDbUYsR0FIdUJMLEVBQWlCOUUsY0FBYyxpQkFDL0IrRSxFQUFnQi9FLGNBQWMsaUJBQ2hDa0YsRUFBZ0JsRixjQUFjLGlCQUNsQ1MsU0FBU1QsY0FBYyx5QkFHeENvRixHQUZjM0UsU0FBU1QsY0FBYyxrQkFDaEJTLFNBQVNULGNBQWMseUJBQzVCUyxTQUFTVCxjQUFjLHdCQU92Q3FGLEdBTndCNUUsU0FBU1QsY0FDckMsNkJBS3VCZ0YsRUFBZ0JoRixjQUFjLHdCQUNqRHNGLEVBQTBCTixFQUFnQmhGLGNBQzlDLDhCQVVGLFNBQVN1RixFQUFXQyxHQUVsQixPQURhLElBQUl0RyxFQUFLc0csRUFBVSxpQkFBa0JsRyxHQUN0Q2tCLFNBQ2QsQ0FYdUJ5RSxFQUFlakYsY0FBYyw0QkFDL0JpRixFQUFlakYsY0FBYywwQkFDL0JrRixFQUFnQmxGLGNBQWMsaUJBMkJqRCxNQUFNeUYsRUFBUyxDQUNiQyxhQUFjLGVBQ2R2RSxjQUFlLGdCQUNmRSxxQkFBc0IsaUJBQ3RCRSxvQkFBcUIseUJBQ3JCRSxnQkFBaUIsMEJBQ2pCRSxXQUFZLHdCQUdSZ0UsRUFBdUIsSUFBSTVFLEVBQWMwRSxFQUFRUixHQUN2RFUsRUFBcUJ0QyxtQkFFUyxJQUFJdEMsRUFBYzBFLEVBQVFULEdBQ2xDM0IsbUJBSXRCLE1BQU11QyxFQUFjLElDcEhMLE1BQ1h6RyxXQUFBQSxDQUFXQyxFQUFxQnlHLEdBQW9CLElBQXZDLE1BQUNDLEVBQUssU0FBRUMsR0FBUzNHLEVBQzFCSyxLQUFLdUcsT0FBU0YsRUFDZHJHLEtBQUt3RyxVQUFZRixFQUNqQnRHLEtBQUt5RyxXQUFhekYsU0FBU1QsY0FBYzZGLEVBQzdDLENBRUFNLFdBQUFBLEdBQ0kxRyxLQUFLdUcsT0FBTzdDLFNBQVNpRCxJQUNqQjNHLEtBQUt3RyxVQUFVRyxFQUFLLEdBRTVCLENBRUFDLE9BQUFBLENBQVFDLEdBR0o3RyxLQUFLeUcsV0FBV0ssUUFBUUQsRUFDNUIsR0RvR0YsQ0FDRVIsTUE5R2lCLENBQ25CLENBQ0V2RyxLQUFNLGtCQUNOQyxLQUFNLHNHQUVSLENBQ0VELEtBQU0sY0FDTkMsS0FBTSx5R0FFUixDQUNFRCxLQUFNLGlCQUNOQyxLQUFNLDRHQUVSLENBQ0VELEtBQU0sVUFDTkMsS0FBTSxxR0FFUixDQUNFRCxLQUFNLHdCQUNOQyxLQUFNLHFHQUVSLENBQ0VELEtBQU0saUJBQ05DLEtBQU0sbUdBd0ZOdUcsU0FBV1AsSUFDVCxNQUFNZ0IsRUFBY2pCLEVBQVdDLEdBQy9CSSxFQUFZUyxRQUFRRyxFQUFZLEdBR3BDLGdCQUVGWixFQUFZTyxjQUlaaEIsRUFBZWxGLGlCQUFpQixTQUFTLEtBQ3ZDLE1BQU13RyxFQUFPQyxFQUFTQyxjQUN0QnRCLEVBQWlCVixNQUFROEIsRUFBS2xILEtBQzlCK0YsRUFBd0JYLE1BQVE4QixFQUFLRyxJQUNyQ0MsRUFBWWxELE1BQU0sSUFHcEIsTUFBTWtELEVBQWMsSUFBSTFDLEVBQWMsdUJBQXdCMkMsSUFDNURKLEVBQVNLLFlBQVlELEVBQUt2SCxLQUFNdUgsRUFBS0UsYUFDckNILEVBQVlqRCxPQUFPLElBRXJCaUQsRUFBWTlDLG9CQUlacUIsRUFBY25GLGlCQUFpQixTQUFTLEtBQ3RDMEYsRUFBcUI1QyxvQkFDckJrRSxFQUFZdEQsTUFBTSxJQUdwQixNQUFNc0QsRUFBYyxJQUFJOUMsRUFBYyxzQkFBdUJxQixLQS9EN0QsU0FBb0JBLEdBQ2xCLE1BQU1nQixFQUFjakIsRUFBV0MsR0FFL0JJLEVBQVlTLFFBQVFHLEVBQ3RCLENBNkRFVSxDQUFXMUIsR0FDWHlCLEVBQVlyRCxPQUFPLElBRXJCcUQsRUFBWWxELG9CQUlaLE1BQU1vRCxFQUFhLElFN0pKLGNBQTZCNUQsRUFDeENwRSxXQUFBQSxDQUFXQyxHQUFpQixJQUFoQixjQUFDb0UsR0FBY3BFLEVBQ3ZCaUYsTUFBTSxDQUFFYixrQkFDUi9ELEtBQUsySCxXQUFhM0gsS0FBS2dFLGNBQWN6RCxjQUFjLGlCQUNuRFAsS0FBSzRILGlCQUFtQjVILEtBQUtnRSxjQUFjekQsY0FBYyw0QkFDN0QsQ0FFQTJELElBQUFBLENBQUkyRCxHQUFjLElBQWIsS0FBQy9ILEVBQUksS0FBRUMsR0FBSzhILEVBQ2JqRCxNQUFNVixPQUNObEUsS0FBSzRILGlCQUFpQnZHLFlBQWN2QixFQUNwQ0UsS0FBSzJILFdBQVd2RyxJQUFNdEIsRUFDdEJFLEtBQUsySCxXQUFXeEcsSUFBTXBCLENBQzFCLEdGaUprQyxDQUFFZ0UsY0FBZSxpQkFHdkQsU0FBU2xFLEVBQWlCa0csR0FDeEIyQixFQUFXeEQsS0FBSzZCLEVBQ2xCLENBSkEyQixFQUFXcEQsb0JBUVgsTUFBTTJDLEVBQVcsSUd0S0YsTUFFWHZILFdBQUFBLENBQVlvSSxFQUFjQyxHQUV0Qi9ILEtBQUtnSSxjQUFnQmhILFNBQVNULGNBQWN1SCxHQUM1QzlILEtBQUtpSSxhQUFlakgsU0FBU1QsY0FBY3dILEVBQy9DLENBRUFiLFdBQUFBLEdBQ0ksTUFBTyxDQUNIcEgsS0FBTUUsS0FBS2dJLGNBQWMzRyxZQUN6QjhGLElBQUtuSCxLQUFLaUksYUFBYTVHLFlBRS9CLENBRUFpRyxXQUFBQSxDQUFZeEgsRUFBTXFILEdBQ2RuSCxLQUFLZ0ksY0FBYzNHLFlBQWN2QixFQUNqQ0UsS0FBS2lJLGFBQWE1RyxZQUFjOEYsQ0FDcEMsR0hvSjBCLGlCQUFrQix3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyBjcmVhdGVzIGEgY2FyZCB3aXRoIHRleHQgYW5kIGFuIGltYWdlIGxpbmssIGFsb25nIHdpdGggdGhlIGFwcHJvcHJpYXRlIGhhbmRsZXJzXG4vL1B1cnBvc2U6IGludGVudGRlZCB0byByZXBsYWNlIGdldENhcmRFbGVtZW50IGZ1bmN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICAvL2NvbnN0cnVjdG9yIGdldHMgcGFzc2VkIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOiBkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2tcbiAgLy9leGFtcGxlIG9mIGNvZGUgd2l0aCBwYXJhbWV0ZXIgZGVjb25zdHJ1Y3RvcmluZ1xuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGxpbmsgfSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKSB7XG4gICAgLy9hbiBvYmplY3QgY29udGFpbmluZyB0aGUgY2FyZCdzIHRleHQgYW5kIGEgbGluayB0byBpdHMgaW1hZ2UgXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgLy8gYSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBjb3JyZXNwb25kaW5nIDx0ZW1wbGF0ZT4gZWxlbWVudFxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICAvL2EgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSBvcGVuaW5nIG9mIHRoZSBwcmV2aWV3IHBpY3R1cmUgbW9kYWwuXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy9cIi5jYXJkX19saWtlLWJ1dHRvblwiXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcbiAgICAgIH0pO1xuXG4gICAgLy9cIi5jYXJkX19kZWxldGUtYnV0dG9uXCJcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24oKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy9wYXNzaW5nIHRoaXMgYXMgYW4gYXJndW1lbnQgZW5zdXJlcyB0aGF0IGFsbCBkYXRhIGlzIHBhc3NlZCB0byB0aGUgaGFuZGxlciAoaW5jbHVkaW5nOiBuYW1lIGFuZCBsaW5rIG9mIGNhcmQpIFxuICAgICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuZ2V0Q2FyZERhdGEoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmREYXRhKCkge1xuICAgIHJldHVybiB7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUljb24oKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgLy9yZW1vdmVzIGNhcmQgZnJvbSB0aGUgRE9NXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLy9yZXR1cm5zIGEgZnVsbHkgZnVuY3Rpb25hbCBjYXJkIGVsZW1lbnQgcG9wdWxhdGVkIHdpdGggdGhlIGFwcHJvcHJpYXRlIGRhdGEgXG4gIGdldFZpZXcoKSB7XG4gICAgLy9nZXQgY2FyZCB2aWV3XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgLy9zZXQgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIikuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgdGhpcy5fbmFtZTtcbiAgICAvL3JldHVybiB0aGUgY2FyZFxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcbiAgfVxufVxuIiwiLy9QdXJwb3NlOiBzZXRzIHNldHRpbmdzIGZvciB2YWxpZGF0aW5nIGZvcm0gZmllbGRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAvL2NvbnN0cnVjdG9yIGdldHMgcGFzc2VkIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuICAvL3NldHRpbmdzIG9iamVjdCB0aGF0IHN0b3JlcyBzZWxlY3RvcnMgYW5kIGZvcm0gY2xhc3NlcyxcbiAgLy9hbmQgdGhlIHNlY29uZCBvbmUgdGFrZXMgYSBmb3JtIGVsZW1lbnQgdG8gYmUgdmFsaWRhdGVkLlxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGZvcm1FbCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBvcHRpb25zLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBvcHRpb25zLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBvcHRpb25zLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gb3B0aW9ucy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IG9wdGlvbnMuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICAvLyBjaGVja3MgdGhlIHZhbGlkaXR5XG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xuICAgIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0Zvcm1WYWxpZGl0eSAgPSAoKSA9PiB0aGlzLl9pbnB1dEVscy5ldmVyeShpbnB1dCA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XG5cbiAgX2Rpc2FibGVCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIF9lbmFibGVCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCk7IC8vIG5vdGUsIHRoYXQgaXQgY2hlY2tzIGlmIGZvcm0gaXMgdmFsaWQgXG5cbiAgICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0RWxzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dEVscy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvL2VuYWJsZXMgZm9ybSB2YWxpZGF0aW9uXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICAvL29wZW5zIHBvcHVwXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgLy9jbG9zZXMgcG9wdXBcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgLy9hcnJvdyBmdW5jdGlvbiB3b3VsZCBhbGxvdyB0aGUgY29udGV4dCBvZiB0aGlzIHRvIHJlbWFpbiB0aGUgc2FtZSBpbnN0ZWFkIG9mIC5iaW5kXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcbiAgICAvL2xpc3RlbnMgZm9yIGVzYyBidXR0b25cbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL3NldHMgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xuICAgICAgICAvL2luc3RhbnRpYW50ZXMgUG9wdXAgY2xhc3MgKHBhcmVudCBjbGFzcylcbiAgICAgICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xuICAgICAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3JtJyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pbnB1dCcpO1xuXG4gICAgfVxuXG4gICAgX2dldElucHV0VmFsdWVzKCl7XG4gICAgICAgIC8vY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XG4gICAgICAgIC8vY3JlYXRlIGEgZm9yRWFjaCBsb29wIHRvIHRha2UgaW4gdGhlIGlucHV0IHZhbHVlcyAgXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4gKGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVzO1xuXG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgICB9KTsgXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7ICAgICAgXG4gICAgfSBcblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IGNhcmRUZW1wbGF0ZSA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4vLyBXcmFwcGVyc1xuXG5jb25zdCBjYXJkTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcbmNvbnN0IHByb2ZpbGVBZGRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1hZGQtbW9kYWxcIik7XG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBhZGROZXdDYXJkRm9ybSA9IHByb2ZpbGVBZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgaW1hZ2VNb2RhbFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1pbWFnZVwiKTtcblxuLy9CdXR0b25zIGFuZCBvdGhlciBET00gbm9kZXNcblxuY29uc3QgcHJvZmlsZU1vZGFsQ2xvc2VCdG4gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xuY29uc3QgYWRkQ2FyZE1vZGFsQ2xvc2VCdG4gPSBwcm9maWxlQWRkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XG5jb25zdCBpbWFnZU1vZGFsQ2xvc2VCdG4gPSBpbWFnZU1vZGFsUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XG5jb25zdCBwcm9maWxlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcbmNvbnN0IGFkZE5ld0NhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtYWRkLWJ1dHRvblwiKTtcbmNvbnN0IGltYWdlTW9kYWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19pbWFnZS1kZXNjcmlwdGlvblwiXG4pO1xuXG4vL0Zvcm0gZGF0YVxuXG5jb25zdCBwcm9maWxlTmFtZUlucHV0ID0gcHJvZmlsZUVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1uYW1lLWlucHV0XCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQgPSBwcm9maWxlRWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBhZGROZXdDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbnB1dF90eXBlX3RpdGxlXCIpO1xuY29uc3QgY2FyZFVybElucHV0ID0gYWRkTmV3Q2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV91cmxcIik7XG5jb25zdCBtb2RhbEltYWdlID0gaW1hZ2VNb2RhbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoY2FyZERhdGEpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkLXRlbXBsYXRlXCIsIGhhbmRsZUltYWdlQ2xpY2spO1xuICByZXR1cm4gY2FyZC5nZXRWaWV3KCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudCBIYW5kbGVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRGF0YSkge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICAvLyBjYWxsIHRoZSBzZWN0aW9uJ3MgYWRkSXRlbSBtZXRob2RcbiAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudCBMaXN0ZW5lcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLy8qIEZvcm1WYWxpZGF0b3IuanMgbG9naWNcblxuY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmNvbnN0IGFkZENhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBhZGROZXdDYXJkRm9ybSk7XG5hZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IGVkaXRDYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgcHJvZmlsZUVkaXRGb3JtKTtcbmVkaXRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vU2VjdGlvbi5qc1xuXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGNhcmREYXRhKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICAgICAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgXCIuY2FyZHNfX2xpc3RcIlxuKTtcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5cbi8vcG9wdXBXaXRoRm9ybS5qcyAoRWRpdCBGb3JtKVxuXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBpbmZvID0gdXNlckRhdGEuZ2V0VXNlckluZm8oKTtcbiAgcHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IGluZm8ubmFtZTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBpbmZvLmpvYjtcbiAgcHJvZmlsZUZvcm0ub3BlbigpO1xufSk7XG5cbmNvbnN0IHByb2ZpbGVGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIsIChkYXRhKSA9PiB7XG4gIHVzZXJEYXRhLnNldFVzZXJJbmZvKGRhdGEubmFtZSwgZGF0YS5kZXNjcmlwdGlvbik7XG4gIHByb2ZpbGVGb3JtLmNsb3NlKCk7XG59KTtcbnByb2ZpbGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vcG9wdXBXaXRoRm9ybS5qcyAoQWRkIEZvcm0pXG5cbmFkZE5ld0NhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkQ2FyZEZvcm1WYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgYWRkQ2FyZEZvcm0ub3BlbigpO1xufSk7XG5cbmNvbnN0IGFkZENhcmRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjcHJvZmlsZS1hZGQtbW9kYWxcIiwgKGNhcmREYXRhKSA9PiB7XG4gIC8vbmV3IGNhcmQgcmVuZGVyIGNhcmRcbiAgcmVuZGVyQ2FyZChjYXJkRGF0YSk7XG4gIGFkZENhcmRGb3JtLmNsb3NlKCk7XG59KTtcbmFkZENhcmRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vcG9wdXBXaXRoSW1hZ2UuanNcblxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7IHBvcHVwU2VsZWN0b3I6IFwiI21vZGFsLWltYWdlXCIgfSk7XG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUltYWdlQ2xpY2soY2FyZERhdGEpIHtcbiAgcG9wdXBJbWFnZS5vcGVuKGNhcmREYXRhKTtcbn1cblxuLy9Vc2VySW5mby5qc1xuXG5jb25zdCB1c2VyRGF0YSA9IG5ldyBVc2VySW5mbyhcIi5wcm9maWxlX19uYW1lXCIsIFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigge2l0ZW1zLCByZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yICkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zOyBcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjsgXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpOyBcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcygpIHtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgICAgIC8vIHByZXBlbmQgYWRkcyBodG1sIHRvIGJlZ2dpbmluZyB0byB0aGUgY29udGFpbmVyIFxuICAgICAgICAvL2FmdGVyIHJlbmRlcnMgY2FyZHMgaXQgcHJlcGVuZHMgaXQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgcGFnZVxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTsgXG4gICAgfVxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcih7cG9wdXBTZWxlY3Rvcn0pe1xuICAgICAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlJyk7XG4gICAgICAgIHRoaXMuX2NhcmREZXNjcmlwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlLWRlc2NyaXB0aW9uJylcbiAgICB9XG4vLyBhIGZ1bmN0aW9uIHdpdGggYSBzaW5nbGUgZGVzdHJ1Y3R1cmVkIHBhcmFtZXRlclxuICAgIG9wZW4oe25hbWUsIGxpbmt9KXtcbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgICAgICB0aGlzLl9jYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gbmFtZTtcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IGxpbms7XG4gICAgfVxufSIsIi8vVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyIG9uIHRoZSBwYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgICAvL2NyZWF0ZWQgdHdvIHBhcmFtZXRlcnMgXG4gICAgY29uc3RydWN0b3IobmFtZVNlbGVjdG9yLCBqb2JTZWxlY3Rvcikge1xuICAgICAgICAvL0Fzc2lnbmVkIHZhcmlhYmxlIG5hbWVcbiAgICAgICAgdGhpcy5fbmFtZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9qb2JTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZVNlbGVjdG9yLnRleHRDb250ZW50LCBcbiAgICAgICAgICAgIGpvYjogdGhpcy5fam9iU2VsZWN0b3IudGV4dENvbnRlbnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRVc2VySW5mbyhuYW1lLCBqb2IpIHtcbiAgICAgICAgdGhpcy5fbmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgdGhpcy5fam9iU2VsZWN0b3IudGV4dENvbnRlbnQgPSBqb2I7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJfcmVmIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsIm5hbWUiLCJsaW5rIiwidGhpcyIsIl9uYW1lIiwiX2xpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfY2FyZEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlSWNvbiIsIl9oYW5kbGVEZWxldGVJY29uIiwiZ2V0Q2FyZERhdGEiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJnZXRWaWV3IiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwib3B0aW9ucyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsIiwiZXJyb3JNZXNzYWdlRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJfY2hlY2tGb3JtVmFsaWRpdHkiLCJfaW5wdXRFbHMiLCJldmVyeSIsImlucHV0IiwiX2Rpc2FibGVCdXR0b24iLCJfc3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJfZW5hYmxlQnV0dG9uIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImV2dCIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJvcGVuIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dExpc3QiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsInZhbHVlIiwicmVzZXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlQWRkTW9kYWwiLCJwcm9maWxlRWRpdEZvcm0iLCJhZGROZXdDYXJkRm9ybSIsImltYWdlTW9kYWxQb3B1cCIsInByb2ZpbGVFZGl0QnRuIiwiYWRkTmV3Q2FyZEJ0biIsInByb2ZpbGVOYW1lSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsImNyZWF0ZUNhcmQiLCJjYXJkRGF0YSIsImNvbmZpZyIsImZvcm1TZWxlY3RvciIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwiY2FyZFNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwiY2FyZEVsZW1lbnQiLCJpbmZvIiwidXNlckRhdGEiLCJnZXRVc2VySW5mbyIsImpvYiIsInByb2ZpbGVGb3JtIiwiZGF0YSIsInNldFVzZXJJbmZvIiwiZGVzY3JpcHRpb24iLCJhZGRDYXJkRm9ybSIsInJlbmRlckNhcmQiLCJwb3B1cEltYWdlIiwiX2NhcmRJbWFnZSIsIl9jYXJkRGVzY3JpcHRpb24iLCJfcmVmMiIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVTZWxlY3RvciIsIl9qb2JTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=