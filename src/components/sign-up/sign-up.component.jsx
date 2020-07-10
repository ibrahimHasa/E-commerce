import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.component.scss';

export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password,confirmedPassword}= this.state ;
        if ( password !== confirmedPassword ) {
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user, {displayName});
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: '',
        });
        } catch (error) {
            console.log(error);
            
        }


    };

    handleChange= event =>{
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    
    render() {
        const {displayName, email, password,confirmedPassword}= this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>
                    I do not have an account
                </h2>
                <span>Sign Up With Email And Password</span>

                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label=' Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label=' E-mail'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label=' Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmedPassword'
                    value={confirmedPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit' on>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
