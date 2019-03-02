import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className='black'>
                 <Image src='/Website/assets/images/bear.jpg'
                    className='header-image' />
                <Jumbotron className='jumbotron'>
                    <h5>
                       Feel free to browse my webpage
                    </h5>
                    <h5>and contact me if you have any questions or comments!</h5>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;