import React, {Component} from 'react'

export default class Login extends Component {
  render(){
    return(
      <div className="form">
      <div>
        <h3 className="login-h3">Log In</h3>
      </div>
      <div className="input-fields">
        <input type="text" placeholder="username" id="usr-name"></input>
        <input type="text" placeholder="password" id="usr-pswd"></input>
      </div>
      <div>
        <button type="button">Submit</button>
      </div>
      <div className="forgot-pass">
        <p>Remember me
        <input type="checkbox" value="checkbox" className="check"></input></p>
        <a href="#" className="click-psswd">Forgot password?</a>
      </div>
      </div>
    )
  }
}