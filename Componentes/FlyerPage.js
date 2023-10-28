import React, { useState } from 'react';
import Flyer from './Flyer';
import img1 from '../public/gamesZone.jpg'
import img2 from '../public/eatZone.jpg'
import img3 from '../public/waitZone.jpg'

const flyersData = [
    {
        image: img1,
        title: 'VAMOS A JUGAR',
        description: '¡Solo se permiten pequeños y pequeñas! Aquí, tus sueños de aventuras y risas se hacen realidad. Prepárate para explorar un mundo lleno de emocionantes desafíos, toboganes que te harán dar vueltas y un mar de pelotas de colores. No pierdas la oportunidad de reír, saltar y hacer nuevas amistades mientras te sumerges en un mundo de diversión sin fin. ¡Ven y sé parte de la diversión hoy mismo!',
    },
    {
        image: img2,
        title: 'HORA COMER',
        description: '¡Es hora de recargar energías en nuestra increíble zona de comida! En este lugar mágico, te espera un festín, desde hamburguesas jugosas hasta pizza recién horneada y helados llenos de sabor. No importa si eres un fanático de la comida rápida o si prefieres opciones más saludables, aquí encontrarás una variedad de opciones que te harán sonreír. ¡Te esperamos en nuestra zona de comida!',
    },
    {
        image: img3,
        title: 'TU TAMBIEN',
        description: 'Sabemos que sus hijos están emocionados por sumergirse en la diversión, y mientras ellos se divierten, ¡les ofrecemos el lugar perfecto para que ustedes se relajen y disfruten! Dejen que nosotros cuidemos de sus pequeños aventureros mientras ustedes disfrutan de un merecido descanso. Siéntense, relájense y disfruten de su tiempo en nuestra zona de espera mientras sus hijos crean recuerdos inolvidables',
    },
];

//pendiente: Hover e Imagen.

const FlyerPage = () => {

    const estilos = {
        general: {
            width: '70%',
            height: '50%',
            border: '2px solid cyan',
            borderRadius: '10px',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'cyan',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        buttonContainer: {

            borderRadius: '10px',
            height: '20%',
            width: '100%',
            display: 'flex',
            backgroundColor: '#5fe0e0',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        flyer: {
            height: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        botones: {
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            border: '2px solid cyan',
            'botones:hover': {
                backgroundColor: 'cyan',
            },
        }

    }

    const [selectedFlyerIndex, setSelectedFlyerIndex] = useState(0);

    const handleSelectFlyer = (index) => {
        setSelectedFlyerIndex(index);
    };

    return (

        <div className="flyer-page" style={estilos.general}>
            <div className='container-Flyer' style={estilos.flyer}>
                <Flyer
                    image={flyersData[selectedFlyerIndex].image}
                    title={flyersData[selectedFlyerIndex].title}
                    description={flyersData[selectedFlyerIndex].description}
                />
            </div>

            <div className="flyer-buttons" style={estilos.buttonContainer}>
                {flyersData.map((_, index) => (
                    <button style={estilos.botones} key={index} onClick={() => handleSelectFlyer(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FlyerPage;
