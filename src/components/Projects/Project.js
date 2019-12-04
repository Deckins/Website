import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Display from './Display';
import Footer from '../Footer/Footer';
import './Project.css';
//TO make changes to gb pages
//run - yarn build
//then - yarn run deploy
const Project = (props) => {

    return (
        <div className='divBody' >
            <Card.Header as="h5">
                <a target='_blank' rel="noopener noreferrer" href={'https://github.com/Deckins'}>
                    My Github Profile
                </a>
            </Card.Header >

            <div className='bg-color'> 
            
            <Row >  
                <Col>
                    <Display
                        title={'EzSave'}
                        text={'Start saving now with this personal spending tracker '}
                        link={'https://ezsave-5c146.firebaseapp.com/'}
                    />
                </Col>
                <Col>
                    <Display
                        title={'FlipLet'}
                        text={'Check out our interactive flip card simulator to improve your learning! '}
                        link={'https://storage.googleapis.com/flipbird/index.html'}
                    />
                </Col>
             </Row>
             <Row>
                <Col>

                    <Display
                        title={'Etch-A-Sketch'}
                        text={'What kind of drawing can you create?'}
                        link={'https://deckins.github.io/Etch-a-Sketch/'}
                    />
                </Col>
            
            
                <Col>

                    <Display
                        title={'Calculator'}
                        text={'Check out this fully functioning calculator with an interesting design!'}
                        link={'https://deckins.github.io/Calculator/'}
                    />
                </Col>
               
            </Row>
            </div>
            <Footer/>
        </div>
    );

}

export default Project;