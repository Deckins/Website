import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className='black'>
                <Image src='../../../assets/bear.jpeg'
                    className='header-image' />
                <Jumbotron className='jumbotron'>
                    <h1>Looks like you've stumbled to the right place!</h1>
                    <p>
                        Hi welcome to my website feel free to explore and have a look at my projects.
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;