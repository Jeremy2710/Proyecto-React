


import React from 'react'
import Flyer from '../molecules/Flyer'
import NextFlyer from '../molecules/NextFlyer'




const SectionFlyer = () => {

    const estilos = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={estilos}>
            <Flyer />
        </div>

    )
}

export default SectionFlyer