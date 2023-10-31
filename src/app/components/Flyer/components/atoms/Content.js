



import React from 'react'
import Button from './Button'


const Content = () => {

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
                <h2>VAMOS A JUGAR</h2>
                <p>¡Solo se permiten pequeños y pequeñas! <br /> <br />
                    Aquí, tus sueños de aventuras y
                    risas se hacen realidad. Prepárate para explorar un mundo lleno de emocionantes desafíos,
                    toboganes que te harán dar vueltas y un mar de pelotas de colores. No
                    pierdas la oportunidad de reír, saltar y hacer nuevas amistades mientras te sumerges en un mundo
                    de
                    diversión sin fin. <br /> ¡Ven y sé parte de la diversión hoy mismo! 🎉🌟</p>
                <Button />
            </div>

        </div>
    )
}

export default Content