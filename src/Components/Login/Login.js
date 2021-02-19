import React, {Component} from 'react';
import ButtonArea from '../../styled-components/ButtonArea';
import DivArea from '../../styled-components/DivArea';
import FormArea from '../../styled-components/FormArea';
import InputArea from '../../styled-components/InputArea';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator';

export class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } 
        else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  
        else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } 

        if(formData.email !== localStorage.getItem('email')) errors.email = "email isn't correct";
        if(formData.password !== localStorage.getItem('pass')) errors.password = "password isn't correct";


        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();
        let errors = this.validateLoginForm();

        if(errors === true){
            alert("You have successfully signed in...");
            window.location.href = '/profile';
        } else {
            this.setState({
                errors: errors,
            });

            console.log(errors);
        }
    }
 
    
 
     render(){
         return(
             <DivArea className="Main">
                 <FormArea>
                    <InputArea className="TypeA" type="text" name="email" placeholder="Enter your email" label="Email Id" onChange={this.handleInputChange}></InputArea>
                    <InputArea className="TypeA" type="password" name="password" placeholder="Enter your password" label="Password" onChange={this.handleInputChange}></InputArea>
                 </FormArea>
                 <ButtonArea className="TypeE" onClick={this.login}>Submit</ButtonArea>
             </DivArea>
         )
     }
 }
 
 export default Login;