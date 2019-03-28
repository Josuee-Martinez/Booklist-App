import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

class Signup extends Component {
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
      //1
      console.log(`${APIURL}/api/user`);
      fetch(`${APIURL}/api/user`, {
          method: 'POST', //2
          body: JSON.stringify({user:this.state}), //3
          headers: new Headers({
              'Content-Type': 'application/json' //4
          })
      }).then(
          (response) => response.json() //5
      ).then((data) => {
          this.props.setToken(data.sessionToken) //6
      }) 
      event.preventDefault()
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

    render() {
          return(
              <div className='container'>
              <div className="box-forma">
              <h1 className="title">Create Your Account</h1>
              <form onSubmit={this.handleSubmit} className="signup-form">
                <label htmlFor="name">Your Name</label>
                <br />
                <input type="name" id="username" name="name" onChange={this.handleChange}/>
                <br />
                <label htmlFor="password">Your Password</label>
                <br />
                <input type="password" id="password" autoComplete="on" onChange={this.handleChange}/>
                <br />
                <button type="submit" id="submit-btn">Sign Up</button>
              </form>
            </div>
           </div>
          )
        }
    }


export default Signup;