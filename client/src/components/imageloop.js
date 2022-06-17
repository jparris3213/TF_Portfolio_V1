import React, { Component } from "react";

class ImageLoop extends Component {
    constructor(props) {
      super(props);
      this.state = { listOfImages: [] };
    }
    importAll(r) {
      return r.keys().map(r);
    }
  
    componentWillMount() {
      const list = this.importAll(
        require.context("../media/Portfolio", false, /\.(jpg)$/)
      );
      this.setState({
        listOfImages: list
      });
    }
  
    render() {
      return (
        <>
          <ul>
            <li className="contentbox menu">
              {this.state.listOfImages.map((image, index) => (
                <img classname="menuli" src={image} key={index} alt="info"></img>
              ))}
            </li>
          </ul>
        </>
      );
    }
  }
  
  export default ImageLoop;