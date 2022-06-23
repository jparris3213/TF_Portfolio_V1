//This is taken from the MERN Homework 21 from UNC Bootcamp, modified for use here. First version will likely copy directly from this and then be modified to fit my needs - JDP 6/22/22

import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations' //doesn't exist yet

import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated]
}