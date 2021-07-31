import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import Products from "./Products";

function Home() {
  const [ads, setAds] = useState([]);
  const [{ user, ad }, dispatch] = useStateValue();
  const { usersId } = useParams();

  // useEffect(() => {
  //   if (usersId) {
  //     const unsubscribe = db
  //       .collection("ads")
  //       // .doc(usersId)
  //       // .collection("ads/ad")
  //       .onSnapshot((snapshot) =>
  //         setAds(snapshot.docs.map((doc) => doc.data()))
  //       );

  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, [ads, usersId]);

  useEffect(() => {
    db.collection("ads").onSnapshot((snapshot) =>
      setAds(snapshot.docs.map((doc) => doc.data()))
    );
  }, [ads]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container ">
          <img
            className="home__image"
            src="https://www.olx.com.pk/assets/wallpaper.6416002a042322099dbfec286d7574f4.jpg"
            alt=""
          />

          <div className="row ">
            <div className=" col-10 mx-auto">
              <h3>Fresh recommendations</h3>
              <div className="row gy-4">
                {ads.map((v) => (
                  <Products
                    id={v.id}
                    image={v.photo}
                    price={v.price}
                    title={v.title}
                    location={v.location}
                  />
                ))}

                {/* <Products
                  id={1}
                  image="https://i.gadgets360cdn.com/large/xbox_series_x_review_1611048168918.jpg"
                  price={80000}
                  title="Xbox series X"
                  location="Malir Karachi"
                  timestamp="2 days ago"
                /> */}
              </div>
            </div>
          </div>

          <Footer Icon={[Twitter, Facebook, Instagram, YouTube]} />
        </div>
      </div>
    </>
  );
}

export default Home;
