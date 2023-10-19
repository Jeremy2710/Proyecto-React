import React from "react";
import Image from "next/image";
import Style from "./servicios.module.css"




function Servicios(props) {

    const { imagen, info } = props

    return (


        <div className={Style.card_iconos}>
            <Image src={imagen} alt="iconos" width={100} height={100} />
            <p>{info}</p>
        </div>

    )
}

export default Servicios
