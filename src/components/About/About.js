import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './About.css';
class About extends Component {
    render() {
        return (
            <div className='body-wrapper'>
                {/* <img className='banner'src='assets/images/header.jpg'></img> */}
                <div className='bio background'>
                    <img className='profile' alt='profile'src='/Website/assets/images/profile.jpg'></img>
                    <h3>Benny Thai</h3>
                    <p>Software Developer</p>
                </div>
                {/* <div className='linkedin'>
                    <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="benny-thai-a5098a162"><a class="LI-simple-link" href='https://www.linkedin.com/in/benny-thai-a5098a162?trk=profile-badge'>Benny Thai</a></div>
                </div> */}
                <div className='body'>
                <div className='body-text wrapper'>
                    <h3>My Experiences</h3>
                    <p className='body-text '>I'm Benny, currently a full time student at Brooklyn College with an interest
                        in FullStack Web Development. I have experience with creating responsive web designs as well as server side
                        scripting for backend development.
                        
                    </p>
                    </div>

                    {/* <div className='body-text wrapper'>
                    <h3 >Why I chose Web Development</h3>
                    <p className='body-text ' >
                        One of my biggest interest include cooking. My favorite type of dish to cook is pasta.
                        The best part of cooking is sharing a delicious meal with your friends and family.
                        I think thats why I enjoy Web development so much because I love building things from scratch.
                        Being able to work really hard on a product and then sharing it with your friends and family
                        is really satisfying.
                    </p>
                    </div> */}
                    <div className='body-text wrapper'>
                    <h3>My other interests</h3>
                    <p className='body-text'>
                        I've also taken an interest in financial markets, more specifically stocks and equities.
                        The idea of analyzing global events to see what kind of impact it will
                        have on business and people is extremly challenging and fun to me. It not only keeps me 
                        updated with current events but also sharpens my analytical skills. In the future I hope to leverage
                        both my knowledge of equities and Web Development to build a tool that will assist me and others to make 
                        the best financial decisions possible.
                    </p>
                    </div>

                    <div className='body-text wrapper'>
                    <h3>How to contact me</h3>
                    <p className='body-text'>
                        If you have any comments, questions or anything you find interesting feel free to contact me through any of my
                        social media links below. Just simply click on one of the icons and send me a message. 
                        You can also contant me through email at bennythai2014@yahoo.com
                    </p>
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default About;