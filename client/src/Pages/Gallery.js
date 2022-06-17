import { isRequiredArgument } from "graphql";
import { Link } from "react-router-dom";
import ImageLoop from "../components/imageloop";



const Gallery = () => {
  return (
    <div className="splash">
      <div className="contentbox menu">
        <ImageLoop />
      </div>
    </div>
  );
};

export default Gallery;
