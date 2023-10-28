import React from 'react';
import Image from "next/image";


const Flyer = ({ image, title, description }) => {

    const estilos = {
        container: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'rgb(15, 219, 15)'
        },
        imgDiv: {
            height: '100%',
            width: '30%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid rgb(15, 219, 15)',
            borderRadius: '10px',
            overflow: 'hidden',

        },
        content: {
            backgroundColor: 'white',
            border: '2px solid rgb(15, 219, 15)',
            borderRadius: '10px',
            height: '100%',
            width: '70%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        },
        img: {
            height: '100%',
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
        }
    }
    return (
        <div className="flyer" style={estilos.container}>
            <div className="Imagen" style={estilos.imgDiv}>
                <Image src={image} alt={title} style={estilos.img} />
            </div>

            <div className='container-content' style={estilos.content}>
                <h2>{title}</h2>
                <p>...</p>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Flyer;
