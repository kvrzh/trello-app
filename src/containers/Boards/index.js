import React, {Component} from 'react';

import Select from '@/components/UI/Select';
import Button from '@/components/UI/Button';

class Boards extends Component{
    constructor(props){
        super(props);
        this.state = {
          options: [{id: 1, value: 'qwe'}, {id:2, value: 'ewq'}],
          selected: '',
        };
    }

    onBoardChange = (event) => {
        this.setState({
            ...this.state,
            selected: event.target.value
        })
    }

    confirmButton = () => {
        console.log(this.state.selected);
    }

    render(){
        return (
            <div>
                <h4>Select the board</h4>
                <p>Select the board in order to view information about it</p>
                <Select
                    name={'board'}
                    id={'boards'}
                    options={this.state.options}
                    onChangeAction={this.onBoardChange}
                />
                <Button
                    buttonName={'Confirm'}
                    buttonAction={this.confirmButton}
                />
            </div>
        );
    }
}

export default Boards;