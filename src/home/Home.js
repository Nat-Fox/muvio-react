import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown, MenuItem, Button, ButtonToolbar, Grid, Row, Col, ResponsiveEmbed
} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" className="logo">Logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem className="item-nav" eventKey={1} href="#">BENEFICIOS</NavItem>
                            <NavItem className="item-nav" eventKey={2} href="#">PRODUCTO</NavItem>
                            <NavItem className="item-nav" eventKey={3} href="#">PLANES</NavItem>
                            <NavItem className="item-nav" eventKey={4} href="#">NOSOTROS</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <ButtonToolbar>
                                    <Button className="btn-login">Login</Button>
                                </ButtonToolbar>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* Video */}

                {/* <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <div style={{ width: 660, height: 'auto' }}>
                                <ResponsiveEmbed a16by9>
                                    <embed type="image/svg+xml" src="/public/video/web_compressed.mp4" />
                                </ResponsiveEmbed>
                            </div>
                        </Col>
                    </Row>
                </Grid> */}

                <Grid>
                    <Row>
                        <Col xs={8} xsOffset={2} md={8} mdOffset={2}>
                            <div className="text-home">
                                Con Muvio visualiza y descarga viajes en la ciudad de manera rápida, fácil y representativa
                                <ButtonToolbar className="btn-test">
                                    <Button className="btn-home">Ir a la versión de prueba</Button>
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
