import React from 'react'
import './style'
import { Link } from 'react-router-dom'

import { Btn } from '@/components/Btn'
import icon from '@assets/images/icons/home.svg'

export const NotFound: React.FC<{}> = () => {
    return (
        <nav className='not-found'>
            <p>
                Страница не найдена <span>404</span>
            </p>
            <Link to='/'>
                <Btn height={46} icon={icon} value='Вернуться на главную' />
            </Link>
        </nav>
    )
}
