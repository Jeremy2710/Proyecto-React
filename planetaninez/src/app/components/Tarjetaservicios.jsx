import React from "react";
import Image from "next/image";

function TarjetasServicios(props) {

    const { info2 } = props

    return (


        <div className="card-iconos">
            <p>{info2}</p>
        </div>

    )
}



export default TarjetasServicios
