import React from "react";
import { useHistory, useParams } from "react-router-dom";
import db from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./ConfirmAd.css";


function ConfirmAd() {
  const [{ user, ad }, dispatch] = useStateValue();
  const history = useHistory();
  const {usersId} = useParams()

  const postToDb = async()  => {
    // console.log(ad)
    const userRef = await db.doc(`ads/123`);
    // .doc(usersId).collection('ads')
    const snapshot = await userRef.get();
    console.log(snapshot)
    userRef.set({
      ...ad
    })

    alert("You have successfully created the ad");
    history.push("/");
  };

  return (
    <div className="confirmAd">
      {ad.map((v, i) => (
        <div className="confirmAd__container">
          <div className="conatinerTop">
            <div className="Ownername">
              <h2>{v.name}</h2>
            </div>
            <div className="OwnerDetails">
              <p>{v.number}</p>
              <p>{v.location}</p>
            </div>
          </div>
          <div className="containerBody">
            <div className="containerLeft">
              <img src={v.photo} alt="" />
            </div>
            <div className="containerRight">
              <h3>{v.title}</h3>
              <p>{v.detail}</p>
              <h3>Rs. {v.price}</h3>
            </div>
          </div>
          <button onClick={postToDb}>Post Now</button>
        </div>
      ))}
    </div>
  );
}

export default ConfirmAd;