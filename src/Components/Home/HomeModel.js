import React from "react";
import "./HomeModal.css";
import offer from "../../Assets/Offerlogo.png";

function HomeModal({ setModel , showModel}) {
    
  return showModel?(
    <div className="modal-container">
      <div className="modal-content">
        <div className="topPanel">
          <div>
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
        {/* <button className="modal-close-button" onClick={() => setModel(false)}>
          X
        </button> */}
        <div className="bottomPanel">
          <div className="input-container">
            <input type="text" placeholder="Enter your email/phone"  />
            <button>Continue</button>
          </div>
          <div className="innerbottomPanel">
            <p style={{ color: "#70bafd", fontSize: 12 }}>We never spam 🤜🏼🤛🏼</p>
         
            <p style={{ color: "#70bafd", fontSize: 12, cursor:"pointer" }} onClick={() => setModel(false)}>
              24/7 doubt-solving, no thanks
            </p>
         
          </div>
        </div>

        {/* <h1>Home Modal</h1> */}
      </div>
    </div>
  ):null
}

export default HomeModal;
