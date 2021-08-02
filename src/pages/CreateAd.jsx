import { Avatar } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import React from "react";
import firebase from 'firebase'
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import db, { storage } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./CreateAd.css";

function CreateAd() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      // setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const createPost = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${photo.name}`).put(photo);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.random(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(photo.name)
          .getDownloadURL()
          .then((url) => {
            // dispatch({
            //   type: "CREATE_AD",
              // item: {
                db.collection('ads').add({
                title: title,
                detail: detail,
                price: price,
                photo: url,
                location: location,
                name: name,
                number: number,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              // },
            })
            // });
            setProgress(0);
            setPhoto(null);
            setPrice("");
            setTitle("");
            setNumber("");
            setName("");
            setLocation("");
            setDetail("");
          });
          alert('Your ad has been successfully added')
          history.push('/')
      }
    );
  };

  // const createPost = (e) => {
  //   e.preventDefault();
  //   // db.collection("ads").add({
  //   dispatch({
  //     type: "CREATE_AD",
  //     item: {
  //       title: title,
  //       detail: detail,
  //       price: price,
  //       photo: photo,
  //       location: location,
  //       name: name,
  //       number: number,
  //     },
  //   });
  //   history.push("/confirmAd");
  // };

  return (
    <div className="createAd">
      <div className="createAd__header">
        <ChevronLeft />
        <Link to='/'>
        <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" />
        </Link>
      </div>

      <div className="createAd__body">
        <h3>Post Your Ad</h3>

        <div className="createAd__container">
          <form>
            <div className="detailBox">
              <h2>Include Some Details</h2>
              <p>Ad Title</p>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <span className="ad__detail">
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </span>

              <p>Description</p>
              <input
                className="descriptionInput"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
              <span className="ad__detail">
                Include condition, features and reason for selling
              </span>
            </div>

            <div className="priceBox">
              <h2>Set A Price</h2>
              <p>Price</p>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="ad__detail">
                The minimum allowed amount is Rs.250
              </span>
            </div>

            <div className="photoBox">
              <h2>UPLOAD UP TO 20 PHOTOS</h2>
              <input type="file" multiple onChange={handleChange} />
            </div>

            <div className="locationBox">
              <h2>Confirm Your Location</h2>
              <p>State</p>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="reviewBox">
              <h2>REVIEW YOUR DETAILS</h2>
              <div className="reviewBox__details">
                <div className="personalDetailsLeft">
                  <Avatar src alt="A" />
                </div>
                <div className="personalDetailsRight">
                  <p>Name</p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="phoneNumber">
                <p>Your Phone Number</p>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="postButton">
              <button disabled={!name || !title || !detail || !price || !location || !photo || !number} type="submit" onClick={createPost}>
                Post Now
              </button>
              <progress className="progressBar" value={progress} max="100" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAd;