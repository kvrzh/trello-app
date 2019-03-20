import React from 'react';

import ToolBarClasses from './Toolbar.module.css';
import Button from '@/components/UI/Button';

const toolbar = (props) => (
    <header className={ToolBarClasses.Toolbar}>
        <h4>
            Trello Observer v.0.0.1
        </h4>
        <Button
            buttonName={props.isAuth ? 'logout' : 'login'}
            buttonAction={props.rightButtonAction}
        />
    </header>
);

export default toolbar;