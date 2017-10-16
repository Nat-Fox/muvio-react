import React, { Component } from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';


class Contact extends Component {
    render() {
        return (
            <div className="content-footer">
                <Image className="img-footer" src="./img/footer/centro.png" />
                <div className="contact">
                    <Grid>
                        <Row>
                            <Col xs={10} md={10}>
                                ¿Quieres agendar una reunión? Te esperamos con tus dudas
                            </Col>
                            <Col xs={2} md={2}>
                                <Button className="btn-contact">Contáctanos</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}


export default Contact;
