import React from 'react';

const Flyer = ({ image, title, description }) => {

    const estilos = {
        container: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'cyan'
        },
        img: {
            height: '100%',
            width: '30%',
            padding: '5px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid cyan',
            borderRadius: '10px',

        },
        content: {
            backgroundColor: 'white',
            border: '2px solid cyan',
            borderRadius: '10px',
            height: '100%',
            width: '70%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        }
    }
    return (
        <div className="flyer" style={estilos.container}>
            <div className="Imagen" style={estilos.img}>
                <img src={image} alt={title} />
            </div>

            <div className='container-content' style={estilos.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Flyer;
