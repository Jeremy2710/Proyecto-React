import React, { useState } from 'react';
import Flyer from './Flyer';
import img1 from '../public/funnyZone.jpeg'
import img2 from '../public/eatZone.jpg'
import img3 from '../public/waitZone.jpg'
import style from './flyerStyles/styles.module.css'

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



const FlyerPage = () => {

    

    const [selectedFlyerIndex, setSelectedFlyerIndex] = useState(0);

    const handleSelectFlyer = (index) => {
        setSelectedFlyerIndex(index);
    };

    return (

        <div className={style.general}>
            <div className={style.flyer}>
                <Flyer
                    image={flyersData[selectedFlyerIndex].image}
                    title={flyersData[selectedFlyerIndex].title}
                    description={flyersData[selectedFlyerIndex].description}
                />
            </div>

            <div className={style.buttonContainer}>
                {flyersData.map((_, index) => (
                    <button className={style.botones} key={index} onClick={() => handleSelectFlyer(index)}>
                        &rarr;{  /* {index + 1} */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FlyerPage;
