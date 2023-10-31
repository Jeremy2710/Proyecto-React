import React from 'react';
import Content from '../atoms/Content';
import NextFlyer from './NextFlyer';
import ContentDos from '../atoms/contentDos';
import ContentTres from '../atoms/ContentTres';
import { mostrarTarjeta } from 'src/components/molecules/function.js';

const Flyer = () => {
    const estilos = {
        tarjetas: {
            width: '60%',
            height: '50%',
            display: 'none',
            border: '2px solid cyan',
            borderRadius: '15px',
            position: 'relative',
            boxSizing: 'border-box',
        },
        uno: {
            display: 'block',
        }
    };

    const estilosTarjetaUno = { ...estilos.tarjetas, ...estilos.uno };

    return (
        <>
            <div className='tarjeta uno' id='tarjeta1' style={estilosTarjetaUno}>
                <Content />
            </div>
            <div className='tarjeta dos' id='tarjeta2' style={estilos.tarjetas}>
                <ContentDos />
            </div>
            <div className='tarjeta tres' id='tarjeta3' style={estilos.tarjetas}>
                <ContentTres />
            </div>
            <NextFlyer />
        </>
    );
};


export default Flyer