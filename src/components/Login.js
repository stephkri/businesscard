import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
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
     props.setPage("MyCards")
   } catch (error) {
    error.response.data.detail? alert(error.response.data.detail) : alert(error.response.data)
  }  
  };

  const onRegister = e => {
    e.preventDefault();
    props.setPage("Register")
  }

  return (
    <section className="login">
      <h3>Login Page</h3>
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
      <div className="login-message">Don't have an account yet?</div>
      <button onClick={onRegister}>Register</button>
    </section>
  );
}
