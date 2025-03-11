import React from 'react';
import styles from "./styles.module.css"

const Robot = () => {
  return (
    <div className={styles.carrito}>
        <div className={styles.carritoCuerpo}></div>
        <div className={`${styles.carritoTecho} text-sm bg-gradient-to-b from-blue-500 to-blue-950`}>
            <p className='font-semibold text-2xl text-amber-400'>Kiwibot</p>
        </div>
        <div className={`${styles.llantas} `}>
            <div className={`${styles.rueda} `}></div>
            <div className={`${styles.rueda} `}></div>
        </div>
    </div>
  );
};

export default Robot;