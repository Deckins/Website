import React, { Component } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
class Home extends Component {
    
    render() {
        return (
            <div>
                    <div className='img-wrapper'>
                        <img className='bridge' alt="bridge" src='/Website/assets/images/city.jpg' />
                    </div>
                    <div className='font-body'>
                        <blockquote>
                        Inaction breeds doubt and fear. Action breeds confidence and courage. 
                        If you want to conquer fear, do not sit home and think about it. 
                        Go out and get busy
                        </blockquote>

                        <cite>Dale Carnegie</cite>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Home;