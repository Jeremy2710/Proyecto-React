

import React from 'react'

const NextFlyer = () => {

    const estilos = {
        content: {
            width: '200px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        botones: {
            width: '45px',
            height: '45px',
            backgroundColor: 'white',
            border: '2px solid cyan',
            cursor: 'pointer',
            borderRadius: '50%',
            transition: ' 0.3s',
        }
    }
    return (
        <div className='botones' style={estilos.content}>
            <button style={estilos.botones} onclick="mostrarTarjeta(1)">1</button>
            <button style={estilos.botones} onclick="mostrarTarjeta(2)">2</button>
            <button style={estilos.botones} onclick="mostrarTarjeta(3)">3</button>
        </div>
    )
}

export default NextFlyer