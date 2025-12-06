import React from "react";
import "./Dashboard.css";
import Reklama from "../pages/Reklama/Reklama.jsx";
import Premuim from "../../assets/prem.ico";
import Star from "../../assets/stars.ico";
import Telegram from "../../assets/tg.ico";
import Gifts from "../pages/Gifts/Gifts.jsx";
import Header from "../pages/Header/Header.jsx"; // yangi komponentni import qilamiz

const Dashboard = () => {
  const demoUser = {
    name: "John Doe",
    image: "/default-avatar.png",
  };

  const storedUser = localStorage.getItem("userData");
  const user = storedUser ? JSON.parse(storedUser) : demoUser;

  return (
    <div className="dashboard">
      {/* Header */}
      <Header user={user} />

      {/* Big central card */}
      <div className="reklama">
        <Reklama />
      </div>

      <br /><br />

      {/* Two floating buttons */}
      <div className="floating-buttons">
        <div className="float-btn left-btn">
          <img src={Premuim} alt="star" />
          <h5>STARS XARIDI</h5>
        </div>
        <div className="float-btn right-btn">
          <img src={Star} alt="star" />
          <h5>PREMIUM XARIDI</h5>
        </div>
      </div>

      {/* Share button */}
      <div className="share-btn">
        <img src={Telegram} alt="telegram" className="tg-icon" />
        <span>Share link to friends</span>
      </div>

      {/* Bottom grid */}
      <Gifts />
    </div>
  );
};

export default Dashboard;
