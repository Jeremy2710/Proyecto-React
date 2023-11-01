import React from 'react'
import FlyerPage from './FlyerPage'
import style from './flyerStyles/styles.module.css'


const FlyerContainer = () => {

    return (
        <div className={style.flyerContainer}>
            <FlyerPage />
        </div>

    )
}

export default FlyerContainer