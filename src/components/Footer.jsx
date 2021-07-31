import {
  Facebook,
  Instagram,
  Twitter,
  YoutubeSearchedFor,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer({Icon }) {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__topSections">
          <div className="topSections">
            <span>Popular Categories</span>
            <ul>Cars</ul>
            <ul>Flat for rebt</ul>
            <ul>Mobile Phones</ul>
            <ul>Jobs</ul>
          </div>
          <div className="topSections">
            <span>Trendind Searches</span>
            <ul>Bikes</ul>
            <ul>Watches</ul>
            <ul>Books</ul>
            <ul>Dogs</ul>
          </div>
          <div className="topSections">
            <span>About Us</span>
            <ul>About EMPG</ul>
            <ul>OLX Blog</ul>
            <ul>Contact Us</ul>
            <ul>OLX for Business</ul>
          </div>
          <div className="topSections">
            <span>OLX</span>
            <ul>Help</ul>
            <ul>Sitemap</ul>
            <ul>Legal and Privacy information</ul>
          </div>
          <div className="topSections">
            <span>Follow Us </span>
            <div className="topSection__rightTop">
              <div className="topSection__socialIcons">{Icon[Facebook]}</div>
              <div className="topSection__socialIcons">{Icon[Twitter]}</div>
              <div className="topSection__socialIcons">{Icon.Youtube}</div>
              <div className="topSection__socialIcons">{Icon.Instagram}</div>
            </div>
            <div className="topSection__rightBottom">
              <img
                src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                alt="olx app"
              />
              <img
                src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                alt="app store"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>Free Classified in Pakistan</span>. © 2006-2021 OLX
      </div>
    </div>
  );
}

export default Footer;
