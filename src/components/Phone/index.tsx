import React from 'react'
import './style'

import icon from '@assets/images/icons/call.svg'

export const Phone: React.FC<{}> = () => {
    return (
        <div className='phone'>
            <figure>
                <img src={icon} alt='telephone' />
            </figure>
            <div>
                <p>Контакты:</p>
                <address>
                    <a href='tel:+79175105759'>+7 (917) 510-57-59</a>
                </address>
            </div>
        </div>
    )
}
