import React from 'react'
import Button from './Button'


const ContentTres = () => {

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
                <h2>TU TAMBIEN</h2>
                <p>¡Bienvenidos! <br /><br />Sabemos que sus hijos están emocionados por sumergirse en la
                    diversión, y mientras ellos se divierten, ¡les ofrecemos el lugar perfecto para que ustedes se
                    relajen y disfruten! Dejen que nosotros cuidemos de
                    sus pequeños aventureros mientras ustedes disfrutan de un merecido descanso. Siéntense,
                    relájense y
                    disfruten de su tiempo en nuestra zona de espera mientras sus hijos crean recuerdos
                    inolvidables. 👨‍👩‍👧‍👦🛋️☕📖
                </p>
                <Button />
            </div>

        </div>
    )
}

export default ContentTres