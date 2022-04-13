import React from 'react'
import './style'

export const Menu: React.FC<{}> = () => {
    const handleClick = () => {
        console.log('open menu')
    }

    return (
        <button onClick={handleClick} className='menu'>
            <span></span>
            <p>МЕНЮ</p>
        </button>
    )
}
