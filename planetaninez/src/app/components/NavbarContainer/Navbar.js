import React from 'react'
import Image from 'next/image'
import icono from "../../../../public/planetaninez.ico";
import '../../globals.scss'



const Navbar = () => {
  return (
    <div className='Navbar'>
        <Image src= {icono} width={70} height={70} margin={0} ></Image>
    </div>
  )
}

export default Navbar