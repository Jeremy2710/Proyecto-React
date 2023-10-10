import React from "react";
import Image from "next/image";





function Servicios(key, imagen, info) {


console.log("Servicios",imagen);

    return (
        <div>
            <div className="Container">

                <h2>Servicios</h2>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    <div className="col">
                        <div>
                            <Image src={imagen} alt="" width={100} height={100} />
                            <p>{info}</p>
                        </div>
                    </div>
                </div>
            </div>
{/* 
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
            </Container> */}






        </div>
    )
}

export default Servicios