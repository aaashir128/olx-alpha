import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import Products from "./Products";

function Home() {
  const [ads, setAds] = useState([]);
  const [{ user, ad }, dispatch] = useStateValue();
  const { adsId } = useParams();

  useEffect(() => {
    // if (usersId) {
      const unsubscribe = db
        .collection("ads")
        // .doc(usersId)
        // .collection("ads/ad")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setAds(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );

      return () => {
        unsubscribe();
        console.log(ads)
      };
    // }
  }, []);

  // useEffect( async () => {
    // document ko jb b call  krege to collectionisi k andr ajae ga ... 

  //  const docRef = await db.doc('ads/123')
  //  const snapshot = await docRef.get()
  //  const data = snapshot.data()
  //  console.log(data)
//  by the way apne bht complicated code likha hai
//  jitna simple krenge utna easy
//  i'd recommend k ap ZERO TO MASTERY k lectures se
//  udemy kro 
//  ZERO TO Mastery
//  free courses pre hain google pr
//  torrent pr
 
   //data agya
  //  kis trha dispatch hota tha?

    // yaha dispatch krwana hy? ?? g
    // yaha to data ko call nh karengy?
    // setAds(data)

  //  ab is data ko system me phenkte?
   //get method will tell if the reference exist or not this is called snapshot
   // lets see what we got
   // promises agr ni pta to .. promise delays mangte hain
   // isi liye inhe async fucntion me likhte hain

  //  console.log(snapshot)
  //  snapshto.exists === true means 
  //  reference theek hai 
  //  data mil skta hai 
  //  lets say 
  // }, []);
// this will put system in infinity loop
// remove krna hai
// ye kaha se seekha hai?
//cleaver programmer you
// Rule no1 always use documentation of brand itself
// false??
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
            <div className="col-10 mx-auto">
              <h3 className='fresh'>Fresh recommendations</h3>
              <div className="row gy-4">
                  {ads.map((v, id) => (
                    // <Link to={`/ads/${id}`}>
                    <Products 
                    id={id}
                    image={v.data.photo}
                    price={v.data.price}
                    title={v.data.title}
                    location={v.data.location} 
                    timestamp={v.data.timestamp}
                    />
                    // </Link>
                  ))}

              
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