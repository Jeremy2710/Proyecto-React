import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Servicios() {




    return (
        <div>
            <Container>

                <h2>Servicios</h2>
                <Row>

                    <Col xs={3}>
                        <div>
                            <img src="" alt="" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et repudiandae aliquam quibusdam, totam excepturi qui voluptas deleniti odio deserunt vel?</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Pase de ...</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </Card.Text>
                                <Button>Comprar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>






        </div>
    )
}

export default Servicios