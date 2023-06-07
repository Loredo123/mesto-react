import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Обновить аватар"
      name="avatar"
      submit="Сохранить"
    >
      <input
        ref={avatarRef}
        name="avatar"
        className="form__input"
        id="url-avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="form__error-message url-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
