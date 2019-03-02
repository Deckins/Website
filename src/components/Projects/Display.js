import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Display.css';
class Display extends Component {
    render() {
        return (
            <div className='card'>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Button variant="primary">
                        <a href={this.props.link} style={{ color: 'white' }}>
                            Project Link
                            </a>
                    </Button>
                </Card.Body>
            </div>
        );
    }
}

export default Display;