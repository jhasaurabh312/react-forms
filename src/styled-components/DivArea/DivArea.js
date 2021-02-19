import React, {Component} from 'react';
import styled from 'styled-components';

const DivField = styled.div`
   ${props => props.className=="Main" ? "{margin: 0 10%; display: flex; flex-direction: column;justify-content: center;}" : " "};
   ${props => props.className=="TypeA" ? "{background-color:#f7f7f7;padding: 12px;box-sizing: border-box;}" : " "};
   ${props => props.className=="TypeB" ? "{display: flex;flex-direction: row;justify-content: space-between; @media screen and (max-width : 576px){display: flex;flex-direction: column;justify-content: center;}}" : ""};
   ${props => props.className=="TypeC" ? "{background-color: #f7f7f7;padding: 12px;box-sizing: border-box;width: 50%;@media screen and (max-width : 576px){width:100%}" : ""};
   ${props => props.className=="TypeD" ? "{background-color:#f7f7f7;padding: 12px;box-sizing: border-box;width: 100%;}" : ""};
   ${props => props.className=="TypeE" ? "{margin: 15px;display: flex;justify-content: center;}" : ""};
`;

// const InputDiv = styled(DivField)`
//   color: tomato;
//   border-color: tomato;
// `;

export class DivArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DivField {...this.props}>{this.props.children}</DivField>
        )
    }
}

export default DivArea;