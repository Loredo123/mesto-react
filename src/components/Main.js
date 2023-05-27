import React from 'react';

import api from '../utils/Api.js';
import Card from './Card.js';




function Main(props) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, addCard] = React.useState([]);

    React.useEffect(() => {

        api.getUser().then((user) => {
            setUserAvatar(user.avatar);
            setUserDescription(user.about);
            setUserName(user.name);
        }).catch(console.error)

        api.getInitialCards().then((data) => {

            addCard(data);
        }).catch(console.error);
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__avatar-container">
                    <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name overflow-text-content">{userName}</h1>
                    <button onClick={props.onEditProfile} aria-label="Редактировать" type="button" className="profile__edit-button button"></button>
                    <p className="profile__comment overflow-text-content">{userDescription}</p>

                </div>
                <button onClick={props.onAddCard} aria-label="Добавить" type="button" className="profile__add-button button"></button>
            </section>
            <section className="gallery">
                <ul className="gallery__grid">
                    {

                        cards.map((card) => {

                            return (
                                <Card onCardClick={props.onCardClick} key={card._id} item={card} {...card} />
                            )
                        })


                    }





                </ul>
            </section>
        </main>
    )
}

export default Main;