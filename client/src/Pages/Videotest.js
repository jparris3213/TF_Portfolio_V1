import { isRequiredArgument } from "graphql";
import { Link } from "react-router-dom";


import { searchMediaCMS } from "../utils/CMS_API";



const VideoTest = () => {

    const video_source = searchMediaCMS('video')

  return (
    <div className="splash">
      <div className="contentbox menu">
      <video id="videoPlayer" className="menuli" width="650" controls muted="muted" autoPlay>
            <source src= {video_source} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoTest;
