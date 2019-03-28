import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        };
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }

    handleSubmit = (event) => {
      fetch(`${APIURL}/api/login`, {
          method: 'POST',
          body: JSON.stringify({user:this.state}),
          headers: new Headers({
              'Content-Type': 'application/json'
              })
      }).then(
          (response) => response.json()
      ).then((data) => {
          this.props.setToken(data.sessionToken)
      }) 
      event.preventDefault()
    }

    render() {
          return(
           
              <div className='container'>
              <div className="box-forma-2">
              <h1 className="title">Signin</h1>
              <form onSubmit={this.handleSubmit} className="signup-form">
                <label htmlFor="name">Your Name</label>
                <br />
                <input type="name" id="username" name="name" onChange={this.handleChange} />
                <br />
                <label htmlFor="password">Your Password</label>
                <br />
                <input type="password" id="password" autoComplete="on" onChange={this.handleChange} />
                <br />
                <button type="submit" id="submit-btn">Sign In</button>
              </form>
            </div>
              </div>
          )
        }
}
export default Login;