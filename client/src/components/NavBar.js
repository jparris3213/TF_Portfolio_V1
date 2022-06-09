import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navitem"><img
        className="navlogo"
        src={require("../media/TFLogo.png")}
        alt="Blue and Gold Abstract design of a Lens, Type Forty Productions Logo"
      />
      <div className="navitem">
        <div className="company-title-one">Type|Forty</div>
        <div className="company-title-two">Productions LLC</div>
      </div>
      </div>
      
      
      <div className="navitem">
        <ul className="menu">
          <li className="menuli">About</li>
          <li className="menuli">Portfolio</li>
          <li className="menuli">Contact</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navigation;
