


function ImagePopup(props) {

    return (
        <div className={`popup popup_fullscreen-image ${props.card && "popup_opened"}`}>
            <figure className="popup__image-container">
                <button onClick={props.onClose} aria-label="Закрыть" type="button" className="popup__button-exit button"></button>
                <img src={props.card.link} className="popup__image" />
                <figcaption className="popup__image-caption">{props.card.name}</figcaption>
            </figure>

        </div>

    )

}


export default ImagePopup;