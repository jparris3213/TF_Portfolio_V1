import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Navigation = () => {
  return (
    <div className="Navbar">
      <div className="navItem"><img
          className="NavLogo"
          src={require("../media/TFLogo.png")}
          alt="Blue and Gold Abstract design of a Lens, Type Forty Productions Logo"
        /></div>
      
        <div className="navItem"><div>Type|Forty</div><div >Productions LLC</div></div>
      
    </div>
    );
};

export default Navigation;
