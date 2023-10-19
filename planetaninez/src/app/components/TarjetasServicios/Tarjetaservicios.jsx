import React from "react";
import Image from "next/image";
import Style from "./tarjetasServicios.module.css"

function TarjetasServicios(props) {

    const { titulo, info, info2, info3, info4, precio } = props

    return (


        <div className={Style.tarjeta_pases}>

            <div className={Style.titulo} id={titulo}>
                <p>{titulo}</p>
            </div>
            <div className= {Style.tarjeta_info}>

                <div className= {Style.precio}>
                    <p><span>$</span>{precio}</p>
                    <p className= {Style.precio_info}>Por persona</p>
                </div>

                <div className= {Style.tarjeta_items}>
                    <ul>
                        <li>{info}</li>
                        <li>{info2}</li>
                        <li>{info3}</li>
                        <li>{info4}</li>
                    </ul>

                </div>

                <div className= {Style.tarjeta_boton}>
                    <a href="#">Añadir al carro</a>
                </div>
            </div>

        </div>
    )
}



export default TarjetasServicios
