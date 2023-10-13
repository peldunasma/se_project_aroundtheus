export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl; 
        this.headers = headers; 
    }

    _checkServerResponse(res) {
        if (res.ok) {
          return res.json();
        } else Promise.reject(res.status);
      }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9"
          }
        }).then(this._checkServerResponse);  
      }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9"
          }
        }).then(this._checkServerResponse);
      }

      editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }, 
          //convert object to string
          body: JSON.stringify({
            name: data.name,  
            about: data.description,
          }),
        }).then(this._checkServerResponse);    
      }

      updateAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"   
          }, 
            body: JSON.stringify({avatar: data.link
            }), 
        }) .then(this._checkServerResponse);
      }

      createNewCard(initialCards) {
        return fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify({
            name: initialCards.name, 
            link: initialCards.link
          }), 
        }).then(this._checkServerResponse);
          
      }

      deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
          method: "DELETE",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        }).then(this._checkServerResponse);
      }

      likeCard(_id) {
        return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
          method: "PUT",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        }).then(this._checkServerResponse);  
      }

      dislikeCard(_id) {
        return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
          method: "DELETE",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        }).then(this._checkServerResponse);   
      }
      
}