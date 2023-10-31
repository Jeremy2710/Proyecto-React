


import React from 'react'

const Button = () => {
    const estilos = {
        width: '200px',
        height: '35px',
        borderRadius: '12px',
        backgroundColor: 'white',
        border: '2px solid cyan',
        cursor: 'pointer',
        position: 'relative',
        left: '270px',
        transition: '0.3s',
    }
    return (
        <button style={estilos}>Reserva ahota!</button>
    )
}

export default Button