import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from '@/hoc/Layout';
import { withRouter } from 'react-router-dom';
import Boards from '@/containers/Boards';
import Board from '@/containers/Board';
import Login from '@/components/Login';
import LoginAuth from '@/containers/LoginAuth';
import PrivateRoute from '@/hoc/PrivateRoute';

class TrelloApp extends Component {
    login = () => {
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const redirectUrl = `${window.location.origin}/login/auth`;
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
                    if(token.length > 10){
                        this.props.history.push({pathname: '/boards'});
                    }
                    clearInterval(int);
                }
            }, 200);
        });

    };

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push({pathname: '/login'});
    };

    render() {
        const token = localStorage.getItem('token');
        const isAuth = token && token.length > 10;
        return (
            <Layout
                isAuth={isAuth}
                rightButtonAction={() => isAuth ? this.logout() : this.login()}
            >
                <Switch>
                    <Route exact path="/" render={() => (
                        isAuth ? (
                            <Redirect to="/boards" />
                        ) : (
                            <Redirect to="/login" />
                        )
                    )}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/login/auth" component={LoginAuth}/>
                    <PrivateRoute path="/boards" component={Boards} />
                    <PrivateRoute path="/board/:boardId"  component={Board}/>
                </Switch>
            </Layout>
        );
    }
}


export default withRouter(TrelloApp);