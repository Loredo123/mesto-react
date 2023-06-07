

import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onClose, isOpen, onAddPlace}) {

    const placeRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e){
        e.preventDefault();

        onAddPlace({name: placeRef.current.value, link: linkRef.current.value});
        placeRef.current.value = '';
        linkRef.current.value = '';
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} title="Новое место" name="card" submit="Сохранить">

          <input ref={placeRef} name="name" id="place-input" minLength="2" maxLength="30" type="text" placeholder="Название"
            className="form__input" required />
          <span className="form__error-message place-input-error"></span>
          <input ref={linkRef} name="link" id="url-input" type="url" placeholder="Ссылка на картинку" className="form__input"
            required />
          <span className="form__error-message url-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;