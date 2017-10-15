import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Features = props => {
    return (
        <Grid>
            {props.elements.map((element, key) => {
                return (
                    <Row key={key}>
                        <Col xs={12} md={4}>
                            <div className="title">{element.title}</div>
                            <div className="text-graph">
                                {element.textGraph}
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <Image className="graph-info" src={element.image} responsive />
                        </Col>
                    </Row>
                );
            })}
        </Grid>
    );
}

export default Features;