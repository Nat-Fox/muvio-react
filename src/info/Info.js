import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
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
                    <Grid className="icon-info">
                        <Row>
                            <Col xs={12} md={4}>
                                <Image className="icon" src="/img/icon/icono1x2.png" />
                                <div className="icon-text">Información actualizada de todos los días, de todo el año</div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image className="icon" src="/img/icon/icono2x2.png" />
                                <div className="icon-text">Mayores muestras al instante</div>
                            </Col>
                            <Col xs={12} md={4}>
                                <Image className="icon" src="/img/icon/icono3x2.png" />
                                <div className="icon-text">Simple y práctico</div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="info-graph">
                    <Grid>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="title">Información clave en un solo lugar</div>
                                <div className="text-graph">
                                    Analiza patrones y peaks de viajes dentro de una ciudad o entre ellas. Visualiza comportamientos de viajes en un período de tiempo entre el origen y destino que escojas.
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <Image className="graph-info" src="http://via.placeholder.com/700x350" responsive />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="title">Resultados a tu medida</div>
                                <div className="text-graph">
                                    Personaliza tu consulta escogiendo período de tiempo, origen y destino que deseas visualizar.
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <Image className="graph-info" src="http://via.placeholder.com/700x350" responsive />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="title">Información que se adapta a tus necesidades</div>
                                <div className="text-graph">
                                    Descarga gráficos y matrices de movilidad entre origen y destino en formato pdf o excel para integrarlo con tus herramientas de siempre.
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <Image className="graph-info" src="http://via.placeholder.com/700x350" responsive />
                            </Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}


export default Info;
