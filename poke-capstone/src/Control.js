import React from 'react';
import Dex from './Dex';

class Control extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            selectedItem: null
        };
    }
    handleClick = () => {
        if (this.selectedItem != null) {
            this.setState({
                visibility: false,
                selectedItem: null
            });
        } else {
            this.setState(prevState => ({
                visibility: !prevState.visibility
            }));
        }
    }

    render() {
        let currentlyVisible = <Dex />;
        return (
            <>
                {currentlyVisible}
            </>
            )
    }
}

export default Control;