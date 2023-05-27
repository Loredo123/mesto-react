


function ImagePopup({ card, onClose }) {

    return (
        <div className={`popup popup_fullscreen-image ${card.name != '' && "popup_opened"}`}>
            <figure className="popup__image-container">
                <button onClick={onClose} aria-label="Закрыть" type="button" className="popup__button-exit button" />
                <img alt={`На фото ${card.name}`} src={card.link} className="popup__image" />
                <figcaption className="popup__image-caption">{card.name}</figcaption>
            </figure>

        </div>

    )

}


export default ImagePopup;