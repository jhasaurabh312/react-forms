import React, {Component} from 'react';
import styled from 'styled-components';

const FormField = styled.form`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export class FormArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FormField>{this.props.children}</FormField>
        )
    }

}

export default FormArea;