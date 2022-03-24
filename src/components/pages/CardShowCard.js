import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../Card"

export default function CardShowCard (props) {

  const navigate = useNavigate();

  const saveCard = (card) => {
    !props.currentUser && props.setPage("CardShowLogin")
    if (props.currentUser) {
      const headers = {
        headers: { Authorization: `Bearer ${props.currentUser.token}`}
      };
      return axios.post(`/api/usercards/${card.id}`, { card }, headers)
      .then(r => {
        alert(r.data)
        navigate("/")
      })
      .catch(e => {
        alert(e.response.data)
        navigate("/")
      })
    }
  }


  return (
    <div>
    {props.cardShow && (
      <Card
        key={props.cardShow.id}
        card={props.cardShow}
        saveCard={saveCard}
      />
    )}
    {!props.cardShow && (
      <p>Sorry, cardID does not exist</p>
    )}
  </div>
  )
}