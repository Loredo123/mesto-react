function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  children,
  submit,
  onSubmit,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          onSubmit={onSubmit}
          name={name}
          className="form"
          autoComplete="off"
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="form__button-save form__button-save_avatar button"
          >
            {submit}
          </button>
        </form>
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__button-exit button"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
