"use client"
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function BetaCarrousel() {
    return (
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
            <div>
            <Image src="/images/vialactea.jpg" width={100} height={200} />
            <p className="imagen1">Leyenda 1</p>
            </div>
            <div>
            <Image src="/images/tormenta.jpg" width={100} height={200}/>
            <p className="imagen2">Leyenda 2</p>
            </div>
            <div>
            <Image src="/images/oceano.jpg" width={100}height={200}/>
            <p className="imagen3">Leyenda 3</p>
            </div>
      </Carousel>
    )

}

export default BetaCarrousel

// infiniteLoop autoPlay showThumbs={false} interval={1000}