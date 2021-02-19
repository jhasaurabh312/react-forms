import React, {Component} from 'react';
import styled from 'styled-components';
import DivArea from '../DivArea';

const ButtonField = styled.button`
    background : #4CAF50;
    color : white;
    width: 50%;
    padding: 14px 20px;
    float: center;
    margin: auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size : 18px;

    &:hover, &:focus {
        background-color: #45a049;
        outline : none;
    }
`;

export class ButtonArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DivArea className={this.props.className}>
                <ButtonField {...this.props}>{this.props.children}</ButtonField>
            </DivArea>  
        )
    }

}

export default ButtonArea;