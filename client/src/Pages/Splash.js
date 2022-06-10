import { Link } from "react-router-dom";
import { Player } from 'video-react';

const Splash = () => {
  return (
      <div className="splash">
        <div className="contentbox">
          <Player>
            <source src="client\src\media\Logo_Loop.mp4"/>
          </Player>
        </div>
      </div>
  );
};

export default Splash;
