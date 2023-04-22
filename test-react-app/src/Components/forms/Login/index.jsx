import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userEmail: '',
      userPassword: ''  
    }
  }

  setEmail = (event) => {
    this.setState({ userEmail: event.target.value})
  }
  setPassword = (event) => {
    this.setState({ userPassword: event.target.value})
  }
  handleSubmit = (event) => {
    const {setUser} = this.props;
    console.log(`Sending data: ${this.state.userEmail} and ${this.state.userPassword}`);
    setUser({login: this.state.userEmail, password: this.state.userPassword})
    event.preventDefault();
  }
  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={userEmail} onChange={this.setEmail} placeholder='email' type='email'/>
        <input value={userPassword} onChange={this.setPassword} placeholder='password' type="password" />
        <button type="submit">SignIn</button>
      </form>
    )
  }
}
