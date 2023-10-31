import React from 'react'
import Image from 'next/image'
import styles from './tarjeta.module.css'

const Galeria = () => {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <Image
          src=""
          alt=""
          style={{
            objectFit: "contain",
          }}
        />
      </article>
    </div>
  );
};

export default Galeria;