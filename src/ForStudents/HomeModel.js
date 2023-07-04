import React, { useState } from "react";
import "./HomeModal.css";
import offer from "../Assets/Offerlogo.png";
// AiOutlineCloseCircle
import axios from "axios";
import { handleGoogleAnalysis } from "../GoogleAnalytics/EventHandling";
import { IoIosCloseCircleOutline } from "react-icons/io";
function HomeModal({ setModel, showModel }) {
  const [email, setEmail] = useState("");
  const [showURl, setURL] = useState(false);
  const dicordURL = "https://discord.gg/43Cegs9uBf";
  function HandleEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      alert("Enter email or phone no");
      return;
    }

    const isValid = emailRegex.test(email);

    submitFormData();
  }
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  function submitFormData() {
    axios
      .get(
        `https://ycsaqjbvebcwene2ipny2pn35m0pwopw.lambda-url.ap-south-1.on.aws?type=SUPPORT&email=${email}`
      )
      .then((res) => {
        handleGoogleAnalysis("Popup", "Submit", "email/phone",email);
        console.log(alert("Message sent. We will contact soon"));
        setURL(true)
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send the message");
      });
  }
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
