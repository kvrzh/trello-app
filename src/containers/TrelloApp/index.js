import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '@/components/Layout';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Boards from '@/containers/Boards';
import {initUser} from '@/store/actions/users';
import Board from '@/containers/Board';
import Login from '@/components/Login';
import LoginAuth from '@/containers/LoginAuth';
import PrivateRoute from '@/hoc/PrivateRoute';

class TrelloApp extends Component {
    login = () => {
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const redirectUrl = 'http://localhost:3000/login/auth';
        const url = `https://trello.com/1/authorize?expiration=1day&name=TrelloApp&scope=read&response_type=token&key=321471dffbe1e0c750fa713b81d24145&return_url=${redirectUrl}&callback_method=fragment`
        const openedUrl = window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
        openedUrl.addEventListener('unload', (e) => {
            const int = setInterval(() => {
                if(openedUrl.closed){
                    const token = localStorage.getItem('token');
                    if(!this.props.user.id && token.length > 10){
                        this.props.history.push({pathname: '/boards'});
                    }
                    clearInterval(int);
                }
            }, 200);
        });

    };
    render() {
        return (
            <Layout
                isAuth={false}
                rightButtonAction={() => this.login()}
            >
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/login/auth" component={LoginAuth}/>
                    <PrivateRoute path="/boards" component={Boards} />
                    <PrivateRoute path="/board/:boardId" component={Board}/>
                </Switch>
            </Layout>
        );
    }
}


export default withRouter(TrelloApp);