import React from "react";

import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name overflow-text-content">
            {currentUser.name}
          </h1>
          <button
            onClick={props.onEditProfile}
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button button"
          ></button>
          <p className="profile__comment overflow-text-content">
            {currentUser.about}
          </p>
        </div>
        <button
          onClick={props.onAddCard}
          aria-label="Добавить"
          type="button"
          className="profile__add-button button"
        ></button>
      </section>
      <section className="gallery">
        <ul className="gallery__grid">
          {props.cards.map((card) => {
            return (
              <Card
                onCardDelete={props.onCardDelete}
                onCardLike={props.onCardLike}
                onCardClick={props.onCardClick}
                key={card._id}
                item={card}
                {...card}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
