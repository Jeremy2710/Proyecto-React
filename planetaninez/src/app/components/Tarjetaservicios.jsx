import React from "react";
import Image from "next/image";
import BotonTarjetas from '../components/BotonTarjetas'

function TarjetasServicios(props) {

    const { titulo, info } = props

    return (


        <div className="card-pases">
            <h3>{titulo}</h3>
            <ul>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
              

            </ul>

            <BotonTarjetas />
        </div>

    )
}



export default TarjetasServicios
