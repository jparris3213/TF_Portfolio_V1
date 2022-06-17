import { isRequiredArgument } from "graphql";
import { Link } from "react-router-dom";



const Splash = () => {
  return (
    <div className="splash">
      <div className="contentbox menu">
        
        <img className="menuli" src={require("../media/Portfolio/_MG_6847.jpg")} />
        
        <img className="menuli"  src={require("../media/Portfolio/IMG_2292.jpg")} />
        
        <img className="menuli"  src={require("../media/Portfolio/_MG_3382_01.jpg")} />
        
        <img className="menuli"  src={require("../media/Portfolio/IMG_5448_01.jpg")} />
      </div>
    </div>
  );
};

export default Splash;
