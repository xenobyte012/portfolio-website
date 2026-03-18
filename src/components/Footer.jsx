import React from 'react'
import whatsapp from '../images/whatsapp.webp'
import facebook from '../images/facebook.webp'
import instagram from '../images/instagram.webp'
import twitter from '../images/twitter.webp'

function Footer() {

  return (
    <footer className="  bg-black flex flex-col   py-10 text-white text-h4 ">
      <div className="flex flex-row justify-center gap-10 ">
        <div>
          <img
            loading="lazy"
            src={whatsapp}
            alt="whatsapp icon"
            className=" w-10"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={facebook}
            alt="facebook icon"
            className=" w-10"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={instagram}
            alt="instagram icon"
            className=" w-11"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={twitter}
            alt="twitter icon"
            className=" w-10"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 my-4">
        <div className="hover:text-blue-600">
          <a to="/">Home</a>
        </div>
        <div>|</div>
        <div className="hover:text-blue-600">
          <a href="#packages">Packages</a>
        </div>

        <div>|</div>
        <div className="hover:text-blue-600">
          <a href="#about">About Us</a>
        </div>
        <div>|</div>
        <div className="hover:text-blue-600">
          <a href="#contact">Contact Us </a>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <h2>
          © 2026 <span className="p-2">|</span> Xenobyte Web Studio
          <span className="p-2">|</span> All Right Reserved
        </h2>
      </div>
    </footer>
  );
}

export default Footer