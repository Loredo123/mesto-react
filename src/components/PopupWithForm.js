


function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <form name={props.name} className="form" noValidate autoComplete="off">
                    <h2 className="form__title">{props.title}</h2>
                    {props.children && props.children()}
                    <button type="submit" className="form__button-save form__button-save_avatar button">{props.submit}</button>
                </form>
                <button onClick={props.onClose} aria-label="Закрыть" type="button" className="popup__button-exit button"></button>
            </div>
        </div>
    )
}

export default PopupWithForm;