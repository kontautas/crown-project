import './sign-in.styles.scss';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }
        catch(error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = 'email' 
                        name = 'email' 
                        value = {this.state.email} 
                        handleChange = {this.handleChange}
                        label = 'email'
                        required>
                    </FormInput>
                    <FormInput 
                        type = 'password'
                        name = 'password' 
                        label = 'password'
                        value = {this.state.password} 
                        required
                        handleChange = {this.handleChange}>
                        </FormInput>
                    <div className='buttons'>
                        <CustomButton type = 'submit'>SIGN IN</CustomButton>
                        <CustomButton  onClick = {SignInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;