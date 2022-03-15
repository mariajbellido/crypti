import React from "react";
import "./Signup.css";
import Cryptiapp from "../assets/trade.png";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container">
        {/* left side */}
        <div className="left">
          <img src={Cryptiapp} alt="Cryptiapp-phone" />
        </div>
        {/* right side */}
        <div className="right">
          <h2>Earn passive income with crypto!</h2>
          <p>
            Earn up to 10% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Type your email" />
            <button className="btn">Sign up now!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
