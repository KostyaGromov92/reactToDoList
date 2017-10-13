import React from 'react';
import { Link } from 'react-router';

import '../App.sass'

class WelcomeMessage extends React.Component {
    render() {

        const { title } = this.props;

        console.log(this.props);

        return (
            <div>
              <h1> Hello from Welcome react component. { title } </h1>
            </div>
        );
    }
}

export default WelcomeMessage;