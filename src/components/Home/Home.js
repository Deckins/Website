import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import './Home.css';
import Footer from '../Footer/Footer';
class Home extends Component {
    state = {
        clicked: false,
        choice: ''
    }
    clickHandler = (id) => {
        console.log(id)
        this.setState({ clicked: true, choice: id })
    }
    render() {
        let affiliation = <h3>Welcome to my Website</h3>;
        if (this.state.clicked === true) {
            if (this.state.choice === 'dog')
                affiliation = <div>Looks like you've chosen Dog</div>
            else if (this.state.choice === 'cat')
                affiliation = <div>Looks like you've chosen Cat</div>
            else if (this.state.choice === 'bear')
                affiliation = <div>Looks like you've chosen Bear</div>


        }
        return (
            <div>
                    <div className='img-wrapper'>
                        <img className='bridge' src='../../assets/images/city.jpg' />
                    </div>
                    <div className='font-body'>
                        <blockquote>
                            The man who comes back through the door in the wall will
                            never be quite the same as the man who went out.
                        </blockquote>
                        <cite>Aldous Huxley</cite>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Home;