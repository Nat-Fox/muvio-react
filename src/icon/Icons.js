import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';


const Icons = props => {
    return (
        <Grid className="icon-info">
            <Row>
                {props.elements.map((element, key) => {
                    return (
                        <Col xs={12} md={4} key={key}>
                            <Image className="icon" src={element.image} />
                            <div className="icon-text">
                                {element.text}
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Grid>
    );
}

export default Icons;

// <Grid className="icon-info">
//     <Row>
//         {iconConfig.map(icon => <Icon
//             image={icon.image}
//             text={icon.text} />
//         )}
//     </Row>
// </Grid>