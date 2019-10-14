import React from 'react';
import './sign-up.styles.scss';
import Forminput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';


class Signup extends React.Component{


    constructor(){
        super();
      
      this.state = {
        displayName: '',
        email:'',
        password:'',
        confirmPassword:''
      
      }
        }

        handleSubmit = async event =>
        {

            event.preventDefault();
            const {displayName,email,password,confirmPassword} = this.state;
            if(password!==confirmPassword){

                alert("password do not match");
                return;
            }

            try{
                    const {user}= await auth.createUserWithEmailAndPassword(email, password);
                    await createUserProfileDocument(user,{displayName});
this.setState({
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
  
  })

            }catch(error){
                            console.error(error);
            }

        }


handleChange = event => {
    const {value, name }=  event.target;
    this.setState({[name]:value});
}
        render(){
            const {displayName,email,password,confirmPassword} = this.state;
            return(
                        <div className="sign-up">
                            <h2 className="title">i do not have an account</h2>
                            <span>Sign up with your email and password</span>
                            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                            
                              
                                <Forminput name="displayName" type="text" value={displayName} handlechange={this.handleChange} label='Display name' required/>
                                <Forminput name="email" type="email" value={email} handlechange={this.handleChange} label='email' required/>
                                <Forminput name="password" type="password" value={password} handlechange={this.handleChange} label='Password' required/>

                                <Forminput name="confirmPassword" type="password" value={confirmPassword} handlechange={this.handleChange} label='Confirm Password' required/>

                               
                                
                                <CustomButton type="submit">SIGN UP</CustomButton>
                            
                            </form>

                        </div>

            );
        }



}
export default Signup;