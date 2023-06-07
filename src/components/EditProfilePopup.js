
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup({isOpen, onClose, onUpdateUser}){

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);

    }, [currentUser]);

    

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: description,
        });
      }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen}  title="Редактировать профиль" name="profile" submit="Сохранить"
        >


          <input defaultValue={name} onChange={handleChangeName} name="name" id="name-input" minLength="2" maxLength="40" type="text" className="form__input"
            required />
          <span className="form__error-message name-input-error"></span>


          <input defaultValue={description} onChange={handleChangeDescription} name="about" id="comment-input" minLength="2" maxLength="200" type="text" className="form__input"
            required />
          <span className="form__error-message comment-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;