import React from 'react'
import { Grid, Row, Col, Carousel } from 'react-bootstrap';

const Planes = props => {
    return (
        <Carousel>
            {props.elements.map((element, key) => {
                return (
                    <Carousel.Item>
                        <Grid>
                            <Row>
                                <Col sm={12} md={12} key={key}>
                                    <div className="title-plan-row-responsive">
                                        {element.title}
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default Planes;
