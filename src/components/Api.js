export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl; 
        this.headers = headers; 
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9"
          }
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
             // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
          })   
      }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9"
          }
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
          })
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
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
          })
          
      }

      updateAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",   
          }, 
          body: JSON.stringify(avatar), 
        }) //callback function
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
          })
          .catch((err) => {
            console.error(err); // log the error to the console
          });
      }

      createCard(initialCards) {
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
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
          })
          .catch((err) => {
            console.error(err); // log the error to the console
          });
      }

      deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
          method: "DELETE",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
          })
          .catch((err) => {
            console.error(err); // log the error to the console
          });
      }

      likeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "PUT",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
          })
          .catch((err) => {
            console.error(err); // log the error to the console
          });
      }

      dislikeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "DELETE",
          headers: {
            authorization: "f01bb77e-1c08-4def-8c31-263c2557aed9",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            //process the result
            if (res.status) {
              return res.json();
            }
          })
          .catch((err) => {
            console.error(err); // log the error to the console
          });
      }
      
}