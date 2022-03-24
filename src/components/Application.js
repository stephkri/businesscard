import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";
import SavedCards from "./SavedCards";
import Login from "./Login";
import Register from "./Register";
import DisplayQR from "./DisplayQR";
import NewCard from "./NewCard";
import EditCard from "./EditCard";


export default function Application(props) {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [myCards, setMyCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});  
  const [page, setPage] = useState("MyCards");

  // const getHeader = function () {
  //   // let user = localStorage.getItem('user');
    
  //   // console.log("*****", user)
    
    
  //     // setPage("")
  //     // setPage("Login")
    
  //   // user = JSON.parse(user)
    
  //   const config = {
  //     headers: { Authorization: `Bearer ${currentUser.token}` },
  //   };
  //   // console.log("*****000000config", config)
  //   return config
  // };

  useEffect(() => {
    if (!currentUser){
      setMyCards([])
      setSavedCards([])
      return
    }
    const headers = {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    };
    
    Promise.all([
      axios.get("/api/mycards", headers),
      axios.get("/api/savedcards", headers),
    ])
    .then((all) => {
      setMyCards(all[0].data);
      setSavedCards(all[1].data);
    })
    .catch(e => console.log(e))
  }, [currentUser]);
  

  return (
    <main>

      <nav>
        <NavTop
          onClick={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setPage={setPage}
        />
      </nav>

      <section className="main">

        {page === "MainPage" &&(
          <MainPage />
        )}

        {/* {page === "QR" && myCards[0] && (
          <QR card={myCards[0]} />
        )} */}

        {page === "MyCards" && currentUser && myCards[0] && (
          <MyCards
            myCards={myCards}
            currentUser={currentUser}
            setMyCards={setMyCards}
            setPage={setPage}
            setCurrentCard={setCurrentCard}
          />
        )}

        {page === "MyCards" && currentUser && !myCards[0] && (
          <p>You currently have no cards.</p>
        )}

        {page === "MyCards" && !currentUser && !myCards[0] && (
          <Login />
        )}

        {page === "SavedCards" && savedCards[0] && (
          <SavedCards
            savedCards={savedCards}
            currentUser={currentUser}
            setSavedCards={setSavedCards}
          />
        )}

        {page === "SavedCards" && !savedCards[0] && (
          <p>You currently have no saved cards.</p>
          )}

        {page === "NewCard" && currentUser && (
          <NewCard
            myCards={myCards}
            currentUser={currentUser}
            setMyCards={setMyCards}
            setPage={setPage}
          />
        )}

        {page === "EditCard" && currentUser && (
          <EditCard
            myCards={myCards}
            currentUser={currentUser}
            setMyCards={setMyCards}
            setPage={setPage}
            currentCard={currentCard}
          />
        )}
        
        {page === "DisplayQR" && currentUser && (
          <DisplayQR
            setPage={setPage}
            currentCard={currentCard}
          />
        )}

        {page === "Login" && (
          <Login setCurrentUser={setCurrentUser} setPage={setPage}/>
        )}

        {page === "Register" && (
          <Register setPage={setPage} setCurrentUser={setCurrentUser} />
        )}

      </section>
    </main>
  );
}
