import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Layout from '@/components/Layout';
import Boards from '@/containers/Boards';

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
                <Route path="/boards" component={Boards}/>

            </Layout>
        );
    }
}

export default TrelloApp;