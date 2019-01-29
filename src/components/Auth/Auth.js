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
            password: '', 
        }
    }

    
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
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
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(
                (response) => response.json())
            .then((data) => {
                this.props.setToken(data.sessionToken)
            })
            event.preventDefault()
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



    render() {
        let title = this.state.login ? "LOGIN TO YOUR ACCOUNT" : "CREATE AN ACCOUNT";

        let singupFields = this.state.login
            ? null
            : (
                <div>
                    <input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} required/><br />
                    <input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} required/>
                </div>
            )
        return (
            <div className="form-style-8">
                <h2>{title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required/>
                    <input type="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required minlength="4"/>
                    {singupFields}
                    <input type="submit" value="Submit" id="submit" /><br />
                    <input type="button" value="Need an account?" onClick={this.logginToggle} id="toggle" />
                </form>
            </div>
        )

    }

}

export default Auth;