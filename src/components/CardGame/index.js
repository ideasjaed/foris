import React, { useState, useEffect } from "react";
import "./style.scss";

import Logo from "../../assets/images/pro.png";

const index = ({ name, image, onFliped, item }) => {
  const onChange = () => {
    onFliped();
  };

  return (
    <div
      className={`${!item.isOpen ? "flipped" : ""} card-flip`}
      onClick={() => onChange()}
    >
      <div className="front-side">
        <img src={image} alt={name} />
      </div>
      <div className="back-side">
        <img
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-wazzaldorp-deviantart-34.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default index;
