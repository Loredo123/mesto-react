import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import trash from '../images/trash.svg';


function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    
    const isOwn = props.item.owner._id === currentUser._id;

    const isLiked = props.item.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = ( 
        `card__like ${isLiked && 'card__like_active'}` 
      );

    function handleClick() {
        props.onCardClick(props.item)
    }

    function handleLikeClick(){
        props.onCardLike(props.item);
    }

    function handleDeleteClick(){
        
        props.onCardDelete(props.item);
    }


    return (
        <li className="gallery__item">
            <article className="card">
                <img alt={`На фото ${props.item.name}`} onClick={handleClick} src={props.item.link} className="card__image" />
                <div className="card__info overflow-text-content">
                    <h2 className="card__place-name overflow-text-content">{props.item.name}</h2>
                    <div className="card__likes">
                        <button onClick={handleLikeClick} type="button" aria-label="Лайк" className={`button ${cardLikeButtonClassName}`}></button>
                        <span className="card__counter">{props.item.likes.length}</span>
                    </div>
                </div>
                {isOwn && <img onClick={handleDeleteClick} src={trash} alt="Удалить картинку"
                    className="card__remove button" />}
            </article>
        </li>



    )
}

export default Card;