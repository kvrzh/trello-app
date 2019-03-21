import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from '@/components/Layout';
import Boards from '@/containers/Boards';
import Board from '@/containers/Board';

class TrelloApp extends Component {
    send = () => {
        console.log('qwe');
    }

    render() {
        return(
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