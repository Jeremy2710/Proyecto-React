"use client"
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function BetaCarrousel() {
    return (
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
        <div>
          <Image src="/images/nueces_1.webp" width={800} height={600} style={{objectFit: "cover"}} />
          {/* <p className="legend">Leyenda 1</p> */}
        </div>
        <div>
          <Image src="/images/flowers_1.webp" width={800} height={600} style={{objectFit: "cover"}}	/>
          {/* <p className="legend">Leyenda 2</p> */}
        </div>
        <div>
          <Image src="/images/forest_1.webp" width={800} height={600}style={{objectFit: "cover"}} />
          {/* <p className="legend">Leyenda 3</p> */}
        </div>
      </Carousel>
    );

}

export default BetaCarrousel

// infiniteLoop autoPlay showThumbs={false} interval={1000}