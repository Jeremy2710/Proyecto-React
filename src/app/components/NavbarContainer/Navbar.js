import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../../globals.scss'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link href="https://github.com/Jeremy2710/Proyecto-React" target='_blank' >
        <Image src="/planetaninez.ico" width={70} height={70} ></Image>
    </Link>
    </div>
  )
}

export default Navbar