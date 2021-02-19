import React, {Component} from 'react';
import { getRequest } from '../../shared/services';
import DivArea from '../../styled-components/DivArea';

export class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            details : [],
        }
    }

    componentDidMount(){
        getRequest('http://localhost:8080/results').then(res => {
            this.setState({
                details : res,
            })
            console.log(this.state.details);
        })
    }
    render() {
        const {details} = this.state;
        return (
          <div>         
            <ul>
              {details.map(plan => (
                <div>
                <li>{plan.fName} - {plan.lName}</li>
                <span>{plan.email}</span>
                <br/><br/>
                </div>
              ))}
            </ul>
          </div>
        );
      }
}

export default Profile;