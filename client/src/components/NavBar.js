import React, { useState} from "react";
import { Link} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const Navigation = () => {

  //modal display state
  const [showModal, setShowModal] = useState(false);


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
              <li>Github</li>
            </ul>
          </li>
          <li className="menuli dropdown">
            Contact
            <ul>
              <>{Auth.loggedIn() ? (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link> 
              ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>)}</>
              
              <li>customer portal</li>
              <li>inquiries</li>
              <li>FAQ/Support</li>
            </ul>
          </li>
        </ul>
      </div>
      
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default Navigation;
