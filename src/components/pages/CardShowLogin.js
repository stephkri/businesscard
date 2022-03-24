import React, { useState } from "react";
import axios from "axios";

import './CardShowLogin.scss'

export default function CardShowLogin(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onLogin = async function (e) {
    e.preventDefault();
    // console.log("@@@@@", password)
   try {
     const { data } = await axios.post("/api/login", { email, password })
     console.log("data++++", data)
     localStorage.setItem('user', JSON.stringify(data.user) );
     props.setCurrentUser(data.user)
     props.setPage("CardShowCard")
    } catch (error) {
    error.response.data.detail? alert(error.response.data.detail) : alert(error.response.data)
  }  
  };

  const onCancel = e => {
    e.preventDefault();
    props.setPage("CardShowCard")
  }

  const onRegister = e => {
    e.preventDefault();
    props.setPage("CardShowRegister")
  }

  return (
    <section className="login">
      <h1>Login to save card</h1>
      <form autoComplete="off" onSubmit={onLogin}>
        <table>
          <tr>
            <td><label for="email">Email </label></td>
            <td>
              <input
                name="email"
                type="email"
                value={email}
                // placeholder="Enter your email"
                onChange={(event) => setemail(event.target.value)}
              />
            </td>
          </tr>
          <tr> 
            <td><label for="firstName">Password </label></td>
            <td>
              <input
                name="password"
                type="password"
                value={password}
                // placeholder="Enter password"
                onChange={(event) => setpassword(event.target.value)}
              />
            </td>
          </tr>
        </table>
        <button type="submit">Login</button>
      </form>
      <button onClick={onCancel}>Cancel</button>
      <div className="login-message">Don't have an account yet?</div>
      <button onClick={onRegister}>Register</button>
    </section>
  );
}
