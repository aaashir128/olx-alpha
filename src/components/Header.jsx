import { Button, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

import { useStateValue } from "../config/StateProvider";
import Footer from "./Footer";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory()

  const logOut = () => {
    if (user) {
      auth.signOut()
    }
  };

  const sellItem = () => {
    if (!user) {
      history.push('/login')
    } else{
      history.push('/createAd')
    }
  }
  return (
    <div className="header">
      <Link to="/">
      <div className="header__left">
        <img
          src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
          alt=""
          />
      </div>
          </Link>

      <div className="header__search">
        <input />
        <Search />
      </div>

      <div className="header__right">
        <Link to={!user && "/login"}>
          <div className='header__login'>
            {user ? "Log-Out" : "Login"}
          </div>
        </Link>
      {user ? <p>{user?.email}</p> : <p>Guest</p> }
        <button className='sellButton' onClick={sellItem}>+ Sell </button>

    
      </div>
    </div>
  );
}

export default Header;
