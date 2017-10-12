import React, { Component } from 'react';
import {
    Grid, Row, Col, Image
} from 'react-bootstrap';

import './Info.css'

class Info extends Component {
    render() {
        return (
            <div className="section-info">
                <div className="what-is">
                    <Grid>
                        <Row>
                            <Col xs={12} md={6}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Col>
                            <Col xs={12} md={6}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="content-icon">
                    <Grid className="icon-info">
                        <Row>
                            <Col xs={12} md={4}>
                                <Image src="http://via.placeholder.com/150x150" />
                                <div>akdjksjd ajkhdajkdha askjdaksjd</div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src="http://via.placeholder.com/150x150" />
                                <div>akdjksjd ajkhdajkdha askjdaksjd</div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image src="http://via.placeholder.com/150x150" />
                                <div>akdjksjd ajkhdajkdha askjdaksjd</div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="info-graph">
                    <Grid>
                        <Row>
                            <Col xs={12} md={6}>
                                text 1
                            </Col>
                            <Col xs={12} md={6}>
                                <Image className="graph-info" src="http://via.placeholder.com/500x350" responsive />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                text 2
                            </Col>
                            <Col xs={12} md={6}>
                                <Image className="graph-info" src="http://via.placeholder.com/500x350" responsive />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                text 3
                            </Col>
                            <Col xs={12} md={6}>
                                <Image className="graph-info" src="http://via.placeholder.com/500x350" responsive />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                text 4
                            </Col>
                            <Col xs={12} md={6}>
                                <Image src="http://via.placeholder.com/500x350" responsive />
                            </Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}


export default Info;
