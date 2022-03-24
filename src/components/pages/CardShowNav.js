import { Fragment } from "react";

import './CardShowNav.scss'

export default function CardShowNav({currentUser,onClick,setCurrentUser,setPage}) {

  const logout = function(){
    localStorage.removeItem('user')
    setCurrentUser(null)
    setPage("CardShowCard")
  }
  return (
    <Fragment>
      {currentUser !== null ? (
        <>
          {" "}
          <p><b>Welcome {currentUser.first_name}!</b></p>
          <div className={"button-container"}>
          <button onClick={logout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={"button-container"}>
          <button onClick={() => onClick("CardShowCard")}>Card</button>
          <button onClick={() => onClick("CardShowRegister")}>Register</button>
          <button onClick={() => onClick("CardShowLogin")}>Login</button>
          </div>
        </>
      )}
    </Fragment>
  );
}

  
