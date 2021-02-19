import React, { Component } from "react";
import ButtonArea from '../../styled-components/ButtonArea';
import DivArea from '../../styled-components/DivArea';
import FormArea from '../../styled-components/FormArea';
import InputArea from '../../styled-components/InputArea';
import { isEmail, isEmpty, isLength, isContainWhiteSpace, isSame } from '../../shared/validator';
import axios from 'axios';
import { getRequest, postRequest } from "../../shared/services";

export class Signup extends Component{

   constructor(props){
       super(props);
       this.state = {
            formData: {}, // Contains signup form data
            errors: {}, // Contains login field errors
            UserData : {}, 
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



    validateSignupForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } 
        
        else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.pass)) {
            errors.password = "Password can't be blank";
        }  
        else if (isContainWhiteSpace(formData.pass)) {
            errors.password = "Password should not contain white spaces";
        } 

        if (isEmpty(formData.cPass)) {
            errors.password = "Confirm Password can't be blank";
        }  
        else if (isContainWhiteSpace(formData.cPass)) {
            errors.password = "Confirm Password should not contain white spaces";
        } 
        
        if(isSame(formData.pass, formData.cPass)){
            if (isEmpty(errors)) {
                return true;
            } else {
                return errors;
            }
        }
        else errors.password = "Both Password do not match";

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    // DataForServer(){
    //     let serverInfo = {};
    //     serverInfo.fullName = this.state.formData.fName + ' ' +this.state.formData.lName;
    //     serverInfo.dob = this.state.formData.pCode;
    //     serverInfo.email = this.state.formData.email;
    //     serverInfo.mobile = this.state.formData.mobile;
    //     serverInfo.password = this.state.formData.pass;

    //     this.setState({UserData : serverInfo}); 
    //     //return true;   
    // }

    signup = (e) => {
        const {formData} = this.state;
        let errors = this.validateSignupForm();

        if(errors === true){
            
            if(this.state.formData){
                postRequest('http://localhost:8080/results',this.state.formData).then(res => {
                    console.log(res);
                    window.location.href = 'http://localhost:8080/results'
                })  
            }
            else console.log('data Not ready');
            
            
        } 
        else {
            this.setState({
                errors: errors,
            });
            console.log(errors);
        }
    }

    render(){
        const {errors} = this.state;
        return(
            <DivArea className="Main">
                <FormArea>

                   <InputArea className="TypeA" type="text" placeholder="Company Name" label="Company Name" name="cName" onChange={this.handleInputChange}></InputArea>
                    
                    <DivArea className="TypeB">
                        <InputArea className="TypeC" type="text" placeholder="Title" label="Title" name="title" onChange={this.handleInputChange}></InputArea>
                        <InputArea className="TypeD" type="text" placeholder="First Name" label="First Name" name="fName" onChange={this.handleInputChange}></InputArea>
                        <InputArea className="TypeD" type="text" placeholder="Last Name" label="Last Name" name="lName" onChange={this.handleInputChange}></InputArea>
                    </DivArea>
                   
                    <InputArea className="TypeA" type="text" placeholder="Email Address" label="Email" name="email" onChange={this.handleInputChange} error={errors.email}></InputArea>                    

                    <DivArea className="TypeB">
                        <InputArea className="TypeC" type="date" placeholder="Pin Code" label="Pin Code" name="pCode" onChange={this.handleInputChange}></InputArea>
                        <InputArea className="TypeD" type="text" placeholder="Mobile Number" label="Mobile" name="mobile" onChange={this.handleInputChange}></InputArea>
                    </DivArea>

                    <InputArea className="TypeA" type="text" placeholder="Password" label="Password" name="pass" onChange={this.handleInputChange} error={errors.password}></InputArea>
                    <InputArea className="TypeA" type="text" placeholder="Confirm Password" label="Confirm Password" name="cPass" onChange={this.handleInputChange} error={errors.password}></InputArea>

                </FormArea>
                <ButtonArea className="TypeE" onClick={this.signup}>Submit</ButtonArea>
            </DivArea>
        )
    }
}

export default Signup;