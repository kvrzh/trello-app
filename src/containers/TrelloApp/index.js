import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from '@/hoc/Layout';
import { withRouter } from 'react-router-dom';
import Boards from '@/containers/Boards';
import Board from '@/containers/Board';
import Login from '@/components/Login';
import PrivateRoute from '@/hoc/PrivateRoute';

class TrelloApp extends Component {
    login = () => {
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const redirectUrl = `${window.location.origin}${process.env.PUBLIC_URL}/#/login/auth`;
        const url = `https://trello.com/1/authorize?expiration=1day&name=TrelloApp&scope=read&response_type=token&key=321471dffbe1e0c750fa713b81d24145&callback_method=postMessage&return_url=${redirectUrl}`
        const openedUrl = window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
        const messageEvent = ({data: token}) => {
            if(token && token.length > 10){
                localStorage.setItem('token', token);
                this.props.history.push({pathname: '/boards'});
                if (typeof window.removeEventListener === 'function') {
                    window.removeEventListener('message', messageEvent, false);
                }
            }
            openedUrl.close();
        };
        window.addEventListener('message', messageEvent);
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
                    <Route exact path={`/login`} component={Login}/>
                    <PrivateRoute path={`/boards`} component={() => <Boards loginFn={() => this.login()}/>} />
                    <PrivateRoute path={`/board/:boardId`}  component={Board}/>
                </Switch>
            </Layout>
        );
    }
}


export default withRouter(TrelloApp);