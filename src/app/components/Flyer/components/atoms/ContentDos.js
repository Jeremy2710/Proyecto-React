import React from 'react'
import Button from './Button'


const ContentDos = () => {

    const estilos = {
        contentFlyer: {
            height: '100%',
            display: 'flex'
        },

        contenido: {
            width: '60%',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        foto: {

            width: '40%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            objectFit: 'cover'

        }

    }
    return (
        <div className='contentFlyer' style={estilos.contentFlyer}>
            <div style={estilos.foto}>
                <img src='src\components\img\waitZone.jpg' alt='foto' />
            </div>
            <div className='contenido' style={estilos.contenido}>
                <h2>HORA COMER</h2>
                <p>¡Es hora de recargar energías en nuestra increíble zona de
                    comida! <br /> <br /> En este lugar mágico, te espera un festín, desde hamburguesas jugosas hasta
                    pizza
                    recién
                    horneada y helados
                    llenos de sabor. No importa si eres un fanático de la comida rápida o si prefieres opciones más
                    saludables, aquí encontrarás una variedad de opciones que te harán sonreír. <br />¡Te
                    esperamos en nuestra zona de comida!🍔🍕🍦</p>
                <Button />
            </div>

        </div>
    )
}

export default ContentDos