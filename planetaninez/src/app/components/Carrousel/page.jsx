"use client"
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Vialactea from "../../../../public/images/vialactea.jpg";
import Tormenta from "../../../../public/images/tormenta.jpg";
import Oceamo from "../../../../public/images/oceano.jpg"



function BetaCarrousel() {
    return (
      <Carousel>
            <div>
            <Image src={Vialactea} width={100} height={200} />
            <p className="imagen1">Leyenda 1</p>
            </div>
            <div>
            <Image src={Tormenta} width={100} height={200}/>
            <p className="imagen2">Leyenda 2</p>
            </div>
            <div>
            <Image src={Oceamo} width={100}height={200}/>
            <p className="imagen3">Leyenda 3</p>
            </div>
      </Carousel>
    )

}

export default BetaCarrousel

// infiniteLoop autoPlay showThumbs={false} interval={1000}