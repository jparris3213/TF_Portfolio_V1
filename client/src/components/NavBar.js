import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navitem">
        <img
          className="navlogo"
          src={require("../media/TFLogo.png")}
          alt="Blue and Gold Abstract design of a Lens, Type Forty Productions Logo"
        />
        <div className="navitem">
          <div className="company-title-one">
            <a className="company-title-one" href="/">
              Type|Forty
            </a>
          </div>
          <div className="company-title-two">Productions LLC</div>
        </div>
      </div>

      <div className="navitem">
        <ul className="menu">
          
        <li className="menuli dropdown">
            About
            <ul>
              <li>history</li>
              <li>current projects</li>
              <li>mission statement</li>
            </ul>
          </li>
          <li className="menuli dropdown">
            Portfolio
            <ul>
              <Link to={"/portfolio"}><li>portraiture</li></Link>
              <li>events</li>
              <li>travel</li>
            </ul>
          </li>
          <li className="menuli dropdown">
            Contact
            <ul>
              <li>customer portal</li>
              <li>inquiries</li>
              <li>FAQ/Support</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
