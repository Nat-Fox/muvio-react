import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button, ButtonToolbar, Grid, Row, Col, Image
} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="http://muvio.cl" className="logo">
                                <Image className="white-logo" src="./img/nav/logo_muvio_barx2.png" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem className="item-nav" eventKey={1} href="#">BENEFICIOS</NavItem>
                            <NavItem className="item-nav" eventKey={2} href="#">PRODUCTO</NavItem>
                            <NavItem className="item-nav" eventKey={3} href="#">PLANES</NavItem>
                            <NavItem className="item-nav" eventKey={4} href="#">NOSOTROS</NavItem>
                            <NavItem eventKey={5} href="#">
                                <ButtonToolbar>
                                    <Button id="btn-login-desktop" className="btn-login">Login</Button>
                                </ButtonToolbar>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* Video */}
                {/* <video data-autoplay id="video_inicial">
                    <source src="./img/video/web_compressed.mp4" />
                </video> */}

                <Image className="img-ciudad" src="./img/imagen_ciudad.png" />

                <Grid>
                    <Row>
                        <Col xs={8} xsOffset={2} md={8} mdOffset={2}>
                            <div className="text-home">
                                Con Muvio visualiza y descarga viajes en la ciudad de manera rápida, fácil y representativa
                                <ButtonToolbar className="btn-test">
                                    <Button href="https://app.muvio.cl/register" className="btn-home" id="btn-home-desktop">Ir a la versión de prueba</Button>
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Row>
                </Grid>


            </div>
        );
    }
}


export default Home;
