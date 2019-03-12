import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Display from './Display';
import Footer from '../Footer/Footer';
import './Project.css';
const Project = (props) => {

    return (
        <div className='divBody' >
            <Card.Header as="h5">
                <a href={'https://github.com/Deckins'}>
                    My Github Profile
                </a>
            </Card.Header >
            <div className='center'> 
            <Row > 
                <Col>
                    <Display
                        title={'Draw-A-Sketch'}
                        text={'Click the link to see what kind of drawing you can create!'}
                        link={'https://deckins.github.io/Etch-a-Sketch/'}
                    />
                </Col>
                <Col>

                    <Display
                        title={'GoSave'}
                        text={'Compete with your friends to see who can save the most money!'}
                        link={'https://github.com/calchen01/GoSave/'}
                    />
                </Col>
            </Row>
            <Row>
                <Col>

                    <Display
                        title={'Calculator'}
                        text={'Check out this fully functioning calculator with an interesting design!'}
                        link={'https://deckins.github.io/Calculator/'}
                    />
                </Col>
                <Col>
                    <Display
                        title={'RockPaperNScissors'}
                        text={'Battle the Computer in an intense game of Rock, paper and scissors!'}
                        link={'https://deckins.github.io/rock_paper_scissors/'}
                    />
                </Col>
            </Row>
            </div>
            <Footer/>
        </div>
    );

}

export default Project;