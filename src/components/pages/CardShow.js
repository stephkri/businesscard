import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardShowCard from './CardShowCard';
import CardShowRegister from './CardShowRegister';
import CardShowLogin from './CardShowLogin';
import CardShowNav from './CardShowNav';

export default function CardShow (props) {

  let { id } = useParams();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [page, setPage] = useState("CardShowCard")
  const [cardShow, setCardShow] = useState({})
    
  useEffect(() => {
    axios.get(`/api/cards/${id}`)
      .then(r => setCardShow(r.data[0]))
      .catch(e => console.log(e))
  }, [id])

  return (
    <div>
      <nav>
        <CardShowNav
          onClick={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setPage={setPage}
        />
      </nav>
      {page === "CardShowCard" && (
        <CardShowCard
          cardShow={cardShow}
          setPage={setPage}
          currentUser={currentUser}
        />
      )}
      {page === "CardShowRegister" && (
        <CardShowRegister
          cardShow={cardShow}
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {page === "CardShowLogin" && (
        <CardShowLogin
          cardShow={cardShow}
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      
    </div>
  )
}