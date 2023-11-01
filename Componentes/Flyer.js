import React from 'react';
import Image from "next/image";
import style from './flyerStyles/styles.module.css'

const Flyer = ({ image, title, description }) => {

   
    return (
        <div className={style.container}>
            <div className={style.imgDiv}>
                <Image src={image}
  alt={title}
  
  style={{
    width:'100%',
  height:'100%',
    borderRadius: '10px',
    objectFit: 'cover',
  }}  />
            </div>

            <div className={style.content}>
                <h2>{title}</h2>
                <p>...</p>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Flyer;
