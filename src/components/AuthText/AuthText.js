import "./AuthText.scss";
import React from "react";

import mainLogo from "../../assets/icons/yollty.svg";
import heart from "../../assets/icons/heart.svg";
import startup from "../../assets/icons/startup.svg";
import target from "../../assets/icons/target.png";
import honoloa from "../../assets/icons/honoloa_logo.svg";
import goldBean from "../../assets/icons/Golden_Bean_Logo.svg";
import cereal from "../../assets/icons/Cereal.svg";
import nail from "../../assets/icons/Nail.svg";

function AuthText() {
  return (
    <div className="AuthText">
      <div className="AuthText__mainIcon">
        <img src={mainLogo} alt="logo" />
      </div>
      <h1 className="AuthText__heading--primary">
        7 customers out of 10 do not come back after the first purchase. What
        are you doing about it?
      </h1>
      <h3 className="AuthText__heading--secondary">
        We help you close the gap between your store and the digital world with
        an easy and intuitive solution
      </h3>
      <div className="AuthText__Items">
        <div className="AuthText__Item">
          <div className="AuthText__Item__Icon">
            <img src={heart} alt="logo" />
          </div>

          <div className="AuthText__Item__Text">
            <h4>Retain your most loyal customers</h4>
            Create a Loyalty Program that really rewards your most loyal
            customers.
          </div>
        </div>

        <div className="AuthText__Item">
          <div className="AuthText__Item__Icon">
            <img src={startup} alt="logo" />
          </div>
          <div className="AuthText__Item__Text">
            <h4>Acquire new customers</h4>
            Rely on word-to-mouth with our very easy to use digital referral
            program.
          </div>
        </div>
        <div className="AuthText__Item">
          <div className="AuthText__Item__Icon">
            <img src={target} alt="logo" />
          </div>

          <div className="AuthText__Item__Text">
            <h4>Stay constantly on top of their mind</h4>
            Send automated targeted messages to your customers.
          </div>
        </div>
      </div>
      <h3 className="AuthText__heading--secondary">
        TRUSTED AND USED BY THOUSANDS OF LOCAL BUSINESSES !
      </h3>
      <div className="AuthText__footer__icons">
        <div className="AuthText__footer__icon">
          <img src={honoloa} alt="logo" />
        </div>
        <div className="AuthText__footer__icon">
          <img src={goldBean} alt="logo" />
        </div>
        <div className="AuthText__footer__icon">
          <img src={nail} alt="logo" />
        </div>
        <div className="AuthText__footer__icon">
          <img src={cereal} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AuthText;
