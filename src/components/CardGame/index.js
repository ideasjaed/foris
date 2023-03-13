import React, { useState } from 'react';
import './style.scss';

import Logo from "../../assets/images/pro.png";

const index = ({name, image}) => {
    const [isFlipped, setisFlipped] = useState(true);
    return (
        <div className={isFlipped ? 'flipped' : ''}>
            <div>
                <div className='front-side'>
                    <img src={image} alt={name} />
                </div>
                <div className='back-side'>
                    <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-wazzaldorp-deviantart-34.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default index
