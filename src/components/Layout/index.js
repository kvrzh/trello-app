import React from 'react';

import Aux from '@/hoc/Auxx';
import ToolBar from '@/components/ToolBar';

import layoutClasses from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <ToolBar
            isAuth={props.isAuth}
            rightButtonAction={props.rightButtonAction}
        />
        <main className={layoutClasses.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;