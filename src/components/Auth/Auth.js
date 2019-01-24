import React, { Component } from 'react';
import './Auth.css';
import APIURL from '../../helpers/environment';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const url = this.state.login ? `${APIURL}/api/signin` : `${APIURL}/api/signup`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.props.setToken(data.sessionToken))
    }

   
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    
    logginToggle = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({
            login: !login,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    // formValidation = (event) => {
    //     event.preventDefault();

    //     if(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '' ){
    //         alert('Please complete all fields')
    //     } else {
    //         alert('Thanks for completing the form')
    //     }
    // }

    render() {
        let title = this.state.login ? "LOGIN TO YOUR ACCOUNT" : "CREATE AN ACCOUNT";

        let singupFields = this.state.login
            ? null
            : (
                <div>
                    <input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} /><br />
                    <input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} />
                </div>
            )
        return (
            <div className="form-style-8">
            <h2>{title}</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
              <input type="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
              {singupFields}
              <input type="submit" value="Submit" id="submit" onClick={this.formValidation}/><br/>
              <input type="button" value="Need an account?" onClick={this.logginToggle} id="toggle"/>
            </form>
          </div>
        )

    }

}

export default Auth;