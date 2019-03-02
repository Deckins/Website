import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Landing.css'
class Landing extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="title">
                        <Link to='/Website/Home'><Button>Continue to Website</Button></Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Landing;