import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button, Carousel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Plan.css';

import Planes from '../planes/Planes';
import resposiveConfig from '../plan/resposiveConfig';

class Plan extends Component {
    render() {
        return (
            <div>
                <div id="planes-desktop" className="content-plans">
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col sm={2} md={2}>
                                <div className="title-plan">Planes</div>
                                <div className="item">Caducidad</div>
                                <div className="item">Santiago - Valparaíso</div>
                                <div className="item">Ciudades &gt;= 200K hab.</div>
                                <div className="item">Ciudades &lt; 200K hab.</div>
                                <div className="item">Intervalo Data Set</div>
                                <div className="item">Guardar consultas</div>
                                <div className="item">Descargas</div>
                            </Col>
                            <Col sm={2} md={2} className="first-column">
                                <div className="title-first">Versión de Prueba</div>
                                <div className="content-column">1 semana</div>
                                <div className="content-column">-</div>
                                <div className="content-column">-</div>
                                <div className="content-column">La Serena</div>
                                <div className="content-column">1 semana</div>
                                <div className="content-column">-</div>
                                <div className="content-column">-</div>
                                <ButtonToolbar className="content-btn">
                                    <Button href="https://app.muvio.cl/register" className="btn-test-plan">Ir a versión de prueba</Button>
                                </ButtonToolbar>
                            </Col>
                            <Col sm={2} md={2} className="second-column">
                                <div className="title-second">Emprendimiento</div>
                                <div className="content-column">6 meses</div>
                                <div className="content-column">-</div>
                                <div className="content-column">-</div>
                                <div className="content-column">1</div>
                                <div className="content-column">2° semestre 2015</div>
                                <div className="content-column">Sí</div>
                                <div className="content-column">Imagen resultados</div>
                                <div className="content-column">Imagen matriz origen/destino</div>
                                <ButtonToolbar className="content-btn">
                                    <Button href="https://telefonica-id-chile.typeform.com/to/mMPq2y" className="btn-want">Lo quiero</Button>
                                </ButtonToolbar>
                            </Col>
                            <Col sm={2} md={2} className="third-column">
                                <div className="title-third">Profesional</div>
                                <div className="content-column">1 año</div>
                                <div className="content-column">-</div>
                                <div className="content-column">1</div>
                                <div className="content-column">3</div>
                                <div className="content-column">Año 2015</div>
                                <div className="content-column">Sí</div>
                                <div className="content-column">Imagenes resultados</div>
                                <div className="content-column">Imagen matriz origen/destino</div>
                                <div className="content-column">Excel resultados</div>
                                <div className="content-column">Excel matriz origen/destino</div>
                                <ButtonToolbar className="content-btn">
                                    <Button href="https://telefonica-id-chile.typeform.com/to/mMPq2y" className="btn-want">Lo quiero</Button>
                                </ButtonToolbar>
                            </Col>
                            <Col sm={2} md={2} className="fourth-column">
                                <div className="title-fourth">Empresa</div>
                                <div className="content-column">Sin caducidad</div>
                                <div className="content-column">1</div>
                                <div className="content-column">2</div>
                                <div className="content-column">5</div>
                                <div className="content-column">Año 2015</div>
                                <div className="content-column">Sí</div>
                                <div className="content-column">Imagen resultados</div>
                                <div className="content-column">Imagen matriz origen/destino</div>
                                <div className="content-column">Excel resultados</div>
                                <div className="content-column">Excel matriz origen/destino</div>
                                <ButtonToolbar className="content-btn">
                                    <Button href="https://telefonica-id-chile.typeform.com/to/mMPq2y" className="btn-want">Lo quiero</Button>
                                </ButtonToolbar>
                            </Col>
                            <Col sm={2} md={2} className="fifth-column">
                                <div className="title-fifth">Personalizado</div>
                                <div className="content-column-fifth">On demand</div>
                                <div className="content-column-fifth">Tailor made</div>
                                <div className="content-column-fifth">Tailor made</div>
                                <div className="content-column-fifth">Tailor made</div>
                                <div className="content-column-fifth">On demand</div>
                                <div className="content-column-fifth">Sí</div>
                                <div className="content-column-fifth">Imagen resultados</div>
                                <div className="content-column-fifth">Imagen matriz origen/destino</div>
                                <div className="content-column-fifth">Excel resultados</div>
                                <div className="content-column-fifth">Excel resultados</div>
                                <ButtonToolbar className="content-btn">
                                    <Button href="https://telefonica-id-chile.typeform.com/to/mMPq2y" className="btn-want-fifth">Lo quiero</Button>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div id="planes-responsive">
                    <div className="title-plan-responsive">Planes</div>
                    <div><Planes elements={resposiveConfig} /></div>
                    {/* <Carousel>
                        <Carousel.Item>
                            <Grid>
                                <Row>
                                    <Col sm={12} md={12}>
                                        <div className="title-plan-row-responsive"></div>                                        
                                    </Col>
                                </Row>
                            </Grid>
                        </Carousel.Item>                
                    </Carousel> */}

                </div>

            </div>
        );
    }
}


export default Plan;
