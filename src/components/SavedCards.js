import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

import Card from "./Card";

export default function SavedCards(props) {

  const deleteCard = (id) => {
    confirmAlert({
      title: 'Delete Card',
      message: 'Are you sure you want to delete this card?',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            const headers = {
              headers: { Authorization: `Bearer ${props.currentUser.token}`}
            };
            return axios.delete(`/api/usercards/${id}`, headers)
            .then(r => {
              console.log(r.data)
              let newCards = props.savedCards.filter(card => {
                return card.id !== id;
              });
              props.setSavedCards(newCards)
            })
            .catch(e => console.log(e))
          }
        },
        {
          label: 'Cancel',
        }
      ]
    });
  }

  const savedCards = props.savedCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        deleteCard={deleteCard}
      />
    )
  })
  return (
    <>
    <h2 className="savedcards-heading">Saved Cards</h2>
    <p>Here is where all of your friends' contact information will be stored.</p>
    <ul>
      {savedCards}
    </ul>
    </>
  )
}