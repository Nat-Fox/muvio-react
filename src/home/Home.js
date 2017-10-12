import React, { Component } from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, ButtonToolbar, Grid, Row, Col, ResponsiveEmbed
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
                            <NavItem className="item-nav" eventKey={1} href="#">Link1</NavItem>
                            <NavItem className="item-nav" eventKey={2} href="#">Link2</NavItem>
                            <NavItem className="item-nav" eventKey={3} href="#">Link2</NavItem>
                            <NavItem className="item-nav" eventKey={4} href="#">Link2</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <ButtonToolbar>
                                    <Button>Default</Button>
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
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                <ButtonToolbar className="btn-test">
                                    <Button>Default</Button>
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
