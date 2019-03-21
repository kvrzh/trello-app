import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Layout from '@/components/Layout';
import Boards from '@/containers/Boards';
import Board from '@/containers/Board';


class TrelloApp extends Component {
    send = () => {
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const redirectUrl = 'http://localhost:3000/board/1';
        const url = `https://trello.com/1/authorize?expiration=1day&name=TrelloApp&scope=read&response_type=token&key=321471dffbe1e0c750fa713b81d24145&return_url=${redirectUrl}&callback_method=fragment`
        window.location.replace(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );

    };


    render() {
        return (
            <Layout
                isAuth={true}
                rightButtonAction={() => this.send()}
            >
                <Switch>
                    <Route path="/boards" component={Boards}/>
                    <Route path="/board/:boardId" component={Board}/>
                </Switch>
            </Layout>
        );
    }
}

export default TrelloApp;