import '../index.css';
import React from 'react';
import { ReactDOM } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';





function App() {

  const [isEditProfilePopupOpen, changeStateProfilePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, changeStateAvatarPopup] = React.useState(false);
  const [isAddCardPopupOpen, changeStateCardPopup] = React.useState(false);

  const [selectedCard, selectCard] = React.useState({ name: '', link: '' });


  function handleCardClick(card) {
    selectCard(card);
  }

  function handleEditAvatarClick() {
    // document.querySelector('.popup_avatar').classList.add('popup_opened');
    changeStateAvatarPopup(true);
  }

  function handleEditProfileClick() {
    // document.querySelector('.popup_profile').classList.add('popup_opened');
    changeStateProfilePopup(true);
  }

  function handleAddCardClick() {
    // document.querySelector('.popup_card').classList.add('popup_opened');
    changeStateCardPopup(true);
  }


  function closeAllPopups() {
    changeStateProfilePopup(false);
    changeStateCardPopup(false);
    changeStateAvatarPopup(false);
    selectCard({ name: '', link: '' });
  }





  return (
    <div className="root">
      <div className="page">
        <Header />
        <PopupWithForm title="Вы уверены?" name="confirm" submit="Да" />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="avatar" submit="Сохранить"
        >

          <input name="avatar" className="form__input" id="url-avatar" type="url" placeholder="Ссылка на картинку"
            required />
          <span className="form__error-message url-avatar-error"></span>
        </PopupWithForm>


        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="profile" submit="Сохранить"
        >


          <input name="name" id="name-input" minLength="2" maxLength="40" type="text" className="form__input"
            required />
          <span className="form__error-message name-input-error"></span>


          <input name="about" id="comment-input" minLength="2" maxLength="200" type="text" className="form__input"
            required />
          <span className="form__error-message comment-input-error"></span>
        </PopupWithForm>




        <PopupWithForm onClose={closeAllPopups} isOpen={isAddCardPopupOpen} title="Новое место" name="card" submit="Сохранить">

          <input name="name" id="place-input" minLength="2" maxLength="30" type="text" placeholder="Название"
            className="form__input" required />
          <span className="form__error-message place-input-error"></span>
          <input name="link" id="url-input" type="url" placeholder="Ссылка на картинку" className="form__input"
            required />
          <span className="form__error-message url-input-error"></span>
        </PopupWithForm>





        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddCardClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
