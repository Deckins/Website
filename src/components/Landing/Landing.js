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
                        <h1>Welcome</h1>
                        <br></br>
                        <Link to='/Website/Home'><Button>Continue to my Website</Button></Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Landing;