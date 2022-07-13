(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__form-save",disabledButtonClass:"popup__form-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:".popup__error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._template=n,this._userId=o,this._likes=t.likes,this._id=t.owner._id,this._cardId=t._id,this._handleCardClick=r,this._handleLikeCard=i,this._handleDeleteCard=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeCounter=this._element.querySelector(".element__like_counter"),this._setEventListeners(),this._id!==this._userId&&this._element.querySelector(".element__button_delete").remove(),this._likeCounter.textContent=this._likes.length,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this.likeButton=this._element.querySelector(".element__button"),this.removeButton=this._element.querySelector(".element__button_delete"),this._cardImage=this._element.querySelector(".element__image"),this.likeButton.addEventListener("click",(function(){e._handleLikeCard(e)})),this.removeButton.addEventListener("click",(function(){e._handleDeleteCard(e)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"updateLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id==e._userId}))}},{key:"addLikeCard",value:function(){this.likeButton.classList.add("element__button_active")}},{key:"deleteLikeCard",value:function(){this.likeButton.classList.remove("element__button_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"getCardId",value:function(){return this._cardId}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),t.classList.add(r._errorClass),t.textContent=e.validationMessage})),o(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),o(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),o(this,"_disabledButton",(function(){r._buttonElement.classList.add(r._disabledButtonClass),r._buttonElement.setAttribute("disabled","")})),o(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._disabledButton(r._disabledButtonClass):(r._buttonElement.classList.remove(r._disabledButtonClass),r._buttonElement.removeAttribute("disabled"))})),o(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),o(this,"enableValidation",(function(){r._setEventListeners()})),o(this,"clearErrors",(function(){r._disabledButton(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),this._config=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll("".concat(t.inputSelector))),this._buttonElement=n.querySelector(t.buttonSelector),this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._disabledButtonClass=t.disabledButtonClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),s(this,"_closeOnClick",(function(e){(e.target.classList.contains("popup_is-active")||e.target.classList.contains("popup__close"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(e){var t=this;this._popup.addEventListener("mousedown",(function(e){t._closeOnClick(e)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupText=t._popup.querySelector(".popup__text"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupText.textContent=e.name,d(b(u.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._buttonSubmit=n._popupForm.querySelector(".popup__form-save"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())})),g(E(u.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(e,t,n){this._buttonSubmit.textContent=e?n:t}},{key:"close",value:function(){g(E(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileTitleSelector=document.querySelector(t),this._profileSubtitleSelector=document.querySelector(n),this._avatarSelector=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._profileTitleSelector.textContent,job:this._profileSubtitleSelector.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(e){this._profileTitleSelector.textContent=e.name,this._profileSubtitleSelector.textContent=e.job}},{key:"setUserAvatar",value:function(e){this._avatarSelector.src=e.avatar}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserId",value:function(e){this._userId=e}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers={authorization:"4939b81c-66db-439d-a731-f61a026bd167","Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.popup__input_name,about:e.popup__input_job})}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.popup__input_avatar})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.popup__input_title,link:e.popup__link})}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;T(U(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=document.querySelector(".popup_add-Card").querySelector(".popup__form"),N=document.querySelector(".profile__overlay"),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup_edit-profile"),M=document.querySelector(".profile__add-button"),z=H.querySelector(".popup__form"),G=document.querySelector(".popup_edit-avatar").querySelector(".popup__form"),$=document.querySelector(".popup__input_type_name"),K=document.querySelector(".popup__input_type_job"),Q=new i(e,V),W=new i(e,z),X=new i(e,G);Q.enableValidation(),W.enableValidation(),X.enableValidation();var Y=null,Z=new P("https://mesto.nomoreparties.co/v1/cohort-45");function ee(e){var t=new n(e,".template",(function(){ne.open(e)}),Y,ce,ae),r=t.generateCard();return t.isLiked()&&t.addLikeCard(),r}Promise.all([Z.getUserInfo(),Z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo({name:o.name,job:o.about}),te.setUserAvatar({avatar:o.avatar}),Y=o._id,se.renderItems(i)})).catch((function(e){console.log(e)}));var te=new j(".profile__title",".profile__subtitle",".profile__img"),ne=new v(".popup_card"),re=new O(".popup_edit-avatar",{submitForm:function(e){re.renderLoading(!0,"Сохранить","Cохранение..."),Z.editUserAvatar(e).then((function(){te.setUserAvatar({avatar:e.popup__input_avatar}),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.renderLoading(!1,"Сохранить","Cохранение...")}))}}),oe=new O(".popup_edit-profile",{submitForm:function(e){oe.renderLoading(!0,"Сохранить","Cохранение..."),Z.setUserInfo(e).then((function(){return oe.close(),te.setUserInfo({name:e.popup__input_name,job:e.popup__input_job})})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1,"Сохранить","Cохранение...")}))}}),ie=new O(".popup_add-Card",{submitForm:function(e){ie.renderLoading(!0,"Создать","Cохранение..."),Z.addNewCard(e).then((function(e){return ie.close(),se.addItem(ee(e))})).catch((function(e){return console.log(e)})).finally((function(){ie.renderLoading(!1,"Создать","Cохранение...")}))}}),ue=new F(".popup_remove-card");function ae(e){ue.open(),ue.setSubmitAction((function(){Z.deleteCard(e.getCardId()).then((function(){e.deleteCard(),ue.close()})).catch((function(e){return console.log(e)}))}))}function ce(e){e.isLiked()?Z.deleteLike(e.getCardId()).then((function(t){e.deleteLikeCard(),e.updateLikes(t.likes)})).catch((function(e){return console.log(e)})):Z.likeCard(e.getCardId()).then((function(t){e.addLikeCard(),e.updateLikes(t.likes)})).catch((function(e){return console.log(e)}))}M.addEventListener("click",(function(){Q.clearErrors(),ie.open()})),N.addEventListener("click",(function(){re.open(),X.clearErrors()})),J.addEventListener("click",(function(){var e=te.getUserInfo();$.value=e.name,K.value=e.job,oe.open(),W.clearErrors()}));var se=new a({renderer:function(e){var t=ee(e);se.addItem(t)}},".elements");ne.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),re.setEventListeners(),ue.setEventListeners()})();
//# sourceMappingURL=main.js.map