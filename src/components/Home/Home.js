import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import './Home.css';
import Footer from '../Footer/Footer';
class Home extends Component {
    render() {
        return (
            <div className='black'>
                <div >
                    <Image src='/assets/images/cat.jpg'
                     className='header-image'/>
                    <Image src='/assets/images/bear.jpg'
                     className='header-image'/>
                    <Image src='/assets/images/dog.jpg'
                     className='header-image'/>
                </div>
                 
                <Jumbotron className='jumbotron'>
                    <h5>
                       Feel free to browse my webpage
                    </h5>
                    
                </Jumbotron>
                <Footer/>
            </div>
        );
    }
}

export default Home;