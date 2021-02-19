import React, {Component} from 'react';
import styled from 'styled-components';
import DivArea from '../DivArea'

const InputField = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1.5px solid #88bee6;
    border-radius: 5px;
    height: 40px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    &:hover,&:focus{
        border: 1.5px solid #88bee6;
        outline: none;
        transition: all 0.4s;
        transform: scaleX(1.1) scaleY(1.3);
    }
`;

const Label = styled.label`
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
`;

const Span = styled.span`
   font-size : 12px;
   color : red;
`;


export class InputArea extends Component{
     constructor(props){
         super(props);
     }

     render(){
         return (
             <DivArea className={this.props.className}>
                <Label>{this.props.label}</Label>
                <InputField {...this.props}></InputField> 
                <Span>{this.props.error}</Span>
             </DivArea>
            
         )
     }
}

export default InputArea;