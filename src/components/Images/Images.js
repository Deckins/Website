import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
class Images extends Component {
    render() {
        return (
            <div>
                <Image src='./assets/images/bear.jpg'/>
                <p>An image of a bear should be here</p>
            </div>
        );
    }
}

export default Images;
