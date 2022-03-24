import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

import Card from "./Card";

export default function MyCards(props) {

  const displayQR = (card) => {
    props.setCurrentCard(card)
    props.setPage("DisplayQR")
  }

  const deleteCard = (id) => {
    confirmAlert({
      title: 'Delete Card',
      message: 'Are you sure you want to delete your Card?',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            const headers = {
              headers: { Authorization: `Bearer ${props.currentUser.token}`}
            };
            return axios.delete(`/api/cards/${id}`, headers)
            .then(r => {
              console.log(r.data)
              let newCards = props.myCards.filter(card => {
                return card.id !== id;
              });
              props.setMyCards(newCards)
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

  const editCard = (card) => {
    props.setCurrentCard(card)
    props.setPage("EditCard")
  }

  const myCards = props.myCards.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        deleteCard={deleteCard}
        editCard={editCard}
        displayQR={displayQR}
      />
    )
  })
  return (
    <>
    <h2 className="mycards-heading">My Cards</h2>
    <p>Here is where you can store all of your own contact information.</p>
    <ul>
      {myCards}
    </ul></>
  )
}