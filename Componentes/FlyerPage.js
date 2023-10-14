import React, { useState } from 'react';
import Flyer from './Flyer';

const flyersData = [
    {
        image: './gamesZone.jpg',
        title: 'Zona de juegos',
        description: '¡Solo se permiten pequeños y pequeñas! Aquí, tus sueños de aventuras y risas se hacen realidad. Prepárate para explorar un mundo lleno de emocionantes desafíos, toboganes que te harán dar vueltas y un mar de pelotas de colores. No pierdas la oportunidad de reír, saltar y hacer nuevas amistades mientras te sumerges en un mundo de diversión sin fin. ¡Ven y sé parte de la diversión hoy mismo!',
    },
    {
        image: 'imagen2.jpg',
        title: 'Flyer 2',
        description: 'Descripción del flyer 2',
    },
    {
        image: 'imagen3.jpg',
        title: 'Flyer 3',
        description: 'Descripción del flyer 3',
    },
];
// prueba 1
//otro cambio 
const FlyerPage = () => {
    const [selectedFlyerIndex, setSelectedFlyerIndex] = useState(0);

    const handleSelectFlyer = (index) => {
        setSelectedFlyerIndex(index);
    };

    return (
        <div className="flyer-page">

            <Flyer
                image={flyersData[selectedFlyerIndex].image}
                title={flyersData[selectedFlyerIndex].title}
                description={flyersData[selectedFlyerIndex].description}
            />
            <div className="flyer-buttons">
                {flyersData.map((_, index) => (
                    <button key={index} onClick={() => handleSelectFlyer(index)}>
                        Flyer {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FlyerPage;
