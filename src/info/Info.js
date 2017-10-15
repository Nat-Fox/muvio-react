import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Features from '../feature/Features';
import featuresConfig from './featuresConfig';

import Icons from '../icon/Icons';
import iconConfig from './iconConfig';

import './Info.css';


class Info extends Component {
    render() {
        return (
            <div className="section-info">
                <div className="what-is">
                    <Grid>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="title">
                                    ¿Qué es Muvio?
                                </div>
                                <div className="text-what-is">
                                    Es una plataforma web que te permite visualizar información de viajes y sus características, dentro y entre las ciudades que elijas.
                                    <ul className="list-what-is">
                                        <li>
                                            Descubre tendencias, analiza comportamientos históricos o eventos específicos.
                                        </li>
                                        <li>
                                            Obtén muestras hasta 20 veces más representativa que las encuestas de movilidad tradicionales.
                                        </li>
                                        <li>
                                            Consulta la movilidad de más de 30 ciudades de Chile de forma fácil, sin esperas ni costos operacionales.
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="cita">
                                    “Nosotros sólo tenemos una foto del día, a diferencia de esta herramienta, que nos entrega muchos más datos”
                                </div>
                                <div className="author">
                                    Gabriel Montero
                                </div>
                                <div className="cargo">
                                    Consultor en ingeniería de transportes
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="content-icon">
                    <Icons elements={iconConfig} />
                </div>

                <div className="info-graph">
                    <Features elements={featuresConfig} />
                </div>

            </div>
        );
    }
}


export default Info;
