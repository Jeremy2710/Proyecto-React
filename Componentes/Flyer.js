import React from 'react';
import Image from "next/image";

const Flyer = ({ image, title, description }) => {

    const estilos = {
        container: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'cyan'
        },
        imgDiv: {
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
        },
        img: {
            height: '100%',
            width: '100%',
        }
    }
    return (
        <div className="flyer" style={estilos.container}>
            <div className="Imagen" style={estilos.imgDiv}>
                <Image src={image} alt={title} style={estilos.img} />
            </div>

            <div className='container-content' style={estilos.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Flyer;
