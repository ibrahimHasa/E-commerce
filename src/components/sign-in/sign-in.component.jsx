import React, { Component } from "react";
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CusttomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CusttomButton type="submit">Sign In</CusttomButton>
            <CusttomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CusttomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
