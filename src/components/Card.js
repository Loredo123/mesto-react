
import trash from '../images/trash.svg';


function Card(props) {

    function handleClick() {
        props.onCardClick(props.item)
    }


    return (
        <li className="gallery__item">
            <article className="card">
                <img alt={`На фото ${props.item.name}`} onClick={handleClick} src={props.item.link} className="card__image" />
                <div className="card__info overflow-text-content">
                    <h2 className="card__place-name overflow-text-content">{props.item.name}</h2>
                    <div className="card__likes">
                        <button type="button" aria-label="Лайк" className="card__like button"></button>
                        <span className="card__counter">{props.item.likes.length}</span>
                    </div>
                </div>
                <img src={trash} alt="Удалить картинку"
                    className="card__remove button" />
            </article>
        </li>



    )
}

export default Card;