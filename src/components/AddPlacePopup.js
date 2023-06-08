import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [place, setPlace] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setPlace("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({ name: place, link: link });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Новое место"
      name="card"
      submit="Сохранить"
    >
      <input
        value={place || ""}
        onChange={(e) => setPlace(e.target.value)}
        name="name"
        id="place-input"
        minLength="2"
        maxLength="30"
        type="text"
        placeholder="Название"
        className="form__input"
        required
      />
      <span className="form__error-message place-input-error"></span>
      <input
        value={link || ""}
        onChange={(e) => setLink(e.target.value)}
        name="link"
        id="url-input"
        type="url"
        placeholder="Ссылка на картинку"
        className="form__input"
        required
      />
      <span className="form__error-message url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
