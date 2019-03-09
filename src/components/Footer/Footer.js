import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
          <div className='footer'>
          <div className='media'>
            <a href='https://www.facebook.com/HowdyPartners' target="_blank"><img  className='social-media'src='/Website/assets/images/Facebook.png'></img></a>
            <a href='https://github.com/Deckins' target="_blank"><img className='social-media' src='/Website/assets/images/Github.png'></img></a>
            <a href='https://linkedin.com/in/benny-thai-a5098a162/' target="_blank"><img className='social-media' src='/Website/assets/images/Linkedin.png'></img></a>
          </div>
            
          </div>
        );
    }
}

export default Footer;