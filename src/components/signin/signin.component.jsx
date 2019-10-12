import React from 'react';
import './signin.styles.scss';
import Forminput from '../forminput/forminput.component';
import Custumbutton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils'
class Signin extends React.Component
{
constructor(props){
super(props);


this.state={
    email:'',
    password:''
}


}

handleSubmit = event =>{
event.preventDefault();
this.setState({email:'', password:''});

}

handleChange = event => {
    const {value, name }=  event.target;
    this.setState({[name]:value});
}

render(){
return(

    <div className="sign-in">
        <h2>i already have a account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <Forminput name="email" type="email" value={this.state.email} handlechange={this.handleChange} label='email' required/>
            
            <Forminput name="password" type="password" value={this.state.password} handlechange={this.handleChange} label='password' required/>
            <div className="button">
            <Custumbutton type="submit" >Sign in </Custumbutton>
            {' '}
            <Custumbutton onClick={signInWithGoogle} isGoogleSignIn>
                
                Sign in with Google
                </Custumbutton>
                </div>
        </form>

    </div>
)

}

}
export default Signin;