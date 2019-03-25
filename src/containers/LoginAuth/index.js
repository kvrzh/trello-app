import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginAuth extends Component{
    componentDidMount(){
        const token = this.props.location.hash.split('token=');
        if(token && token[1] && token[1].length > 10){
            localStorage.setItem('token', token[1]);
            window.close();
        }else{
            this.props.history.push({pathname: '/login'});
        }
    }
    render(){
        return (
            <div>Wait</div>
        )
    }
}
export default connect()(LoginAuth);