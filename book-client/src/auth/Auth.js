import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css';

const Auth = (props) => {
    return (
        <div>
            <h1 className="main-heading">For readers, for bookworms, for all.</h1>
            <Signup setToken={props.setToken}/>
        {/* // </Col> */}
        {/* // <Col md="6"> */}
            <Login setToken={props.setToken}/>
        </div>
    )
}

export default Auth;