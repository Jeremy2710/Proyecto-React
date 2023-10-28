import React from 'react'
import FlyerPage from './FlyerPage'

const FlyerContainer = () => {

    const estilos = {
        height: '100vh',
        backgroundColor: 'rgb(234, 229, 229)',
        color: '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={estilos}>
            <FlyerPage />
        </div>

    )
}

export default FlyerContainer