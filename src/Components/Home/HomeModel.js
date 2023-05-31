import React, { useState } from "react";
import "./HomeModal.css";
import offer from "../../Assets/Offerlogo.png";
// AiOutlineCloseCircle
import { IoIosCloseCircleOutline } from "react-icons/io";
function HomeModal({ setModel, showModel }) {
  const [email, setEmail] = useState("");
  const [showURl, setURL] = useState(false);
  const dicordURL = "https://discord.gg/43Cegs9uBf";
  function HandleEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = emailRegex.test(email);

    if (isValid) {
      setURL(true);
    } else {
      alert("Enter valid email");
    }
  }
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  return showModel ? (
    <div className="modal-container">
      <div className="modal-content">
        <div className="topPanel">
          <div>
            <button
              className="modal-close-button"
              onClick={() => setModel(false)}
            >
              <IoIosCloseCircleOutline size={25} color="black" />
            </button>
            <h1 id="Modeltitle">Get access to 24/7 doubt solving! </h1>
            <div className="OfferLine">
              <img className="OfferLogo" src={offer}></img>
              <span id="OfferText">
                Plus 10% off on your first subscription with us, and access to a
                lot of notes, resources, live sessions, and more.
              </span>
            </div>
          </div>
        </div>

        <div className="bottomPanel">
          {showURl ? (
            <>
              <p className="joinDiscord">
                Join our Discord community for discussions and updates:
              </p>
              <a href={dicordURL} target="_blank" rel="noopener noreferrer">
                {dicordURL}
              </a>
            </>
          ) : (
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your email/phone"
                onChange={changeEmail}
              />
              <button onClick={() => HandleEmail()}>Continue</button>
            </div>
          )}
          <div className="innerbottomPanel">
            <p style={{ color: "#70bafd", fontSize: 12 }}>
              We never spam
              {/* 🤜🏼🤛🏼 */}
            </p>

            <p
              style={{ color: "#70bafd", fontSize: 12, cursor: "pointer" }}
              onClick={() => setModel(false)}
            >
              24/7 doubt-solving, no thanks
            </p>
          </div>
        </div>

        {/* <h1>Home Modal</h1> */}
      </div>
    </div>
  ) : null;
}

export default HomeModal;
