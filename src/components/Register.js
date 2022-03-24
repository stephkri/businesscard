import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
    const onRegister = async function (e) {
      e.preventDefault()
      // console.log("@@@@@", password)
     try {
       const { data } = await axios.post("/api/register", { firstName, lastName, email, password })
       console.log("data++++", data)
       localStorage.setItem('user', JSON.stringify(data.user) );
       props.setCurrentUser(data.user)
       props.setPage("MyCards")
     } catch (error) {
       error.response.data.detail? alert(error.response.data.detail) : alert(error.response.data)
     }
    };

    const onLogin = e => {
      e.preventDefault();
      props.setPage("Login")
    }
  
  return (
    <section className="register">
      <h1>Register Page</h1>
      <form autoComplete="off" onSubmit={onRegister}>
        <table>
          <tr>
            <td><label for="firstName">First Name </label></td>
            <td>
              <input
                name="firstName"
                type="text"
                value={firstName}
                // placeholder="Enter First Name"
                onChange={(event) => setfirstName(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td><label for="lastName">Last Name </label></td>
            <td>
              <input
                name="lastName"
                type="text"
                value={lastName}
                // placeholder="Enter Last Name"
                onChange={(event) => setlastName(event.target.value)}
              />
            </td>
          </tr>
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
        <button type="submit">Register</button>
      </form>
      <div className="login-message">Already have an account?</div>
      <button onClick={onLogin}>Login</button>
    </section>
  );
}
