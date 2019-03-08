import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import './Home.css';
import Footer from '../Footer/Footer';
class Home extends Component {
    state={
        clicked:false,
        choice:''
    }
    clickHandler = (id) => {
        console.log(id)
        this.setState({clicked:true, choice:id})
    }
    render() {
        let affiliation =  <h5>Choose your affiliation</h5>;
        if(this.state.clicked===true){
            if(this.state.choice === 'dog')
           affiliation = <div>Looks like you've chosen Dog</div>
           else if(this.state.choice ==='cat')
           affiliation = <div>Looks like you've chosen Cat</div>
           else if(this.state.choice === 'bear')
           affiliation = <div>Looks like you've chosen Bear</div>


        }
        return (
            <div className='center'>
                <div >
                    <Image id='cat' onClick={(id)=> this.clickHandler(id)} 
                        src='/Website/assets/images/cat.jpg'
                        className='header-image'/>
                    <Image id='bear'onClick={(id)=> {this.clickHandler(id)}}
                    src='/Website/assets/images/bear.jpg'
                     className='header-image'/>
                    <Image id='dog' onClick={(id)=> {this.clickHandler(id)}}
                    src='/Website/assets/images/dog.jpg'
                     className='header-image'/>
                </div>
                <Jumbotron className='jumbotron'>
                   
                    {affiliation}
                </Jumbotron>
                <Footer/>
            </div>
        );
    }
}

export default Home;