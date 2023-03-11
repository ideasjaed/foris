import React from 'react'
import HeaderIcon from './icons/HeaderIcon';

const getIcon = (key = null) => {
    const mappedComponents = [
        ['header-icon', HeaderIcon],
    ];

    const iconsMap = new Map(mappedComponents);

    if(iconsMap.has(key)) {
        return iconsMap.get(key);
    }

    return null;
}


export default getIcon;
