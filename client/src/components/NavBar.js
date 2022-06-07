import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Navigation = () => {
  return (
    <div className="navbar">
      <img
        className="navlogo"
        src={require("../media/TFLogo.png")}
        alt="Blue and Gold Abstract design of a Lens, Type Forty Productions Logo"
      />
      <div className="navitem">
        <div className="company-title-one">Type|Forty</div>
        <div className="company-title-two">Productions LLC</div>
      </div>

      <div className="navitem">
        <div>Test</div>
      </div>
    </div>
  );
};

export default Navigation;
