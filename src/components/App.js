import '../index.css';
import React from 'react';
import { ReactDOM } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';





function App() {

  const [cards, addCard] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});


  const [isEditProfilePopupOpen, changeStateProfilePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, changeStateAvatarPopup] = React.useState(false);
  const [isAddCardPopupOpen, changeStateCardPopup] = React.useState(false);

  const [selectedCard, selectCard] = React.useState({ name: '', link: '' });

  React.useEffect(() => {
    api.getUser().then((user)=> {
      setCurrentUser(user);   
    }).catch(console.error);

    api.getInitialCards().then((data) => {

      addCard(data);
  }).catch(console.error);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
 
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      
      addCard((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(console.error);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      addCard((state) => state.filter(item => item._id != card._id));
    }).catch(console.error)
  }

  function handleCardClick(card) {
    selectCard(card);
  }

  function handleEditAvatarClick() {
    
    changeStateAvatarPopup(true);
  }

  function handleEditProfileClick() {
    
    changeStateProfilePopup(true);
  }

  function handleAddCardClick() {
    
    changeStateCardPopup(true);
  }

  function handleUpdateUser(user) {
    api.editUser(user).then(() => {
      setCurrentUser({...currentUser, name: user.name, about: user.about });
      
      closeAllPopups();
    })
    
  }

  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar).then(() => {
      setCurrentUser({...currentUser, avatar: avatar });
      
      closeAllPopups();
    })
  }
  
  function handleAddPlaceSubmit(card){
    api.addCard(card).then( (item) => {
      addCard([item, ...cards]);

      closeAllPopups();
    })
  }


  function closeAllPopups() {
    changeStateProfilePopup(false);
    changeStateCardPopup(false);
    changeStateAvatarPopup(false);
    selectCard({ name: '', link: '' });
  }



  return (
    <CurrentUserContext.Provider value={currentUser} >
    <div className="root">
      <div className="page">
        <Header />
        <PopupWithForm title="Вы уверены?" name="confirm" submit="Да" />
        
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <EditProfilePopup onUpdateUser={handleUpdateUser} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} />




        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} onClose={closeAllPopups} isOpen={isAddCardPopupOpen} />





        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <Main onCardDelete={handleCardDelete} cards={cards} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddCardClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
