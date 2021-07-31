import { Avatar, Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setPassword("");
    history.push("/");
  };

  const handleRegisteration = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user.emal);
        alert("Congragulations. You are now member of OLX CLONE");
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
        alt=""
      />

      <p>Save all your favorite items in one place</p>
      <div className="login__container">
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            placeholder="Enter your Email here..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>

          <input
            value={password}
            type="password"
            placeholder="Enter your Password here..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </form>

        <p>
          By signing-in you agree to the OLX ClONE Condition of Use & Sale.
          Please see our privacy policy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Button onClick={handleRegisteration}>
          Register Yourself with OLX
        </Button>
      </div>
    </div>
  );
}

export default Login;
