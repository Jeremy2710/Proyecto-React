import React from "react";
import Image from "next/image";





function Servicios(props) {

    const { imagen, info } = props

    return (


        <div className="card-iconos">
            <Image src={imagen} alt="iconos" width={100} height={100} />
            <p>{info}</p>
        </div>

    )
}

export default Servicios
