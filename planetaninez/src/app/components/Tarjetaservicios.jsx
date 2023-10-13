import React from "react";
import Image from "next/image";


function TarjetasServicios(props) {

    const { titulo, info, info2, info3, info4, precio } = props

    return (


        <div className="tarjetas-pases">

            <div className="titulo" id={titulo}>
                <p>{titulo}</p>
            </div>
            <div className="tarjeta-info">

                <div className="precio">
                    <p><span>$</span>{precio}</p>
                    <p className="precio-info">Por persona</p>
                </div>

                <div className="tarjeta-items">
                    <ul>
                        <li>{info}</li>
                        <li>{info2}</li>
                        <li>{info3}</li>
                        <li>{info4}</li>
                    </ul>

                </div>

                <div className="tarjeta-boton">
                    <a href="#">Añadir al carrito</a>
                </div>
            </div>

        </div>
    )
}



export default TarjetasServicios
