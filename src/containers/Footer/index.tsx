import React from 'react'
import './style'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { Logo } from '@components/Logo'

export const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <div className='footer-inner-wrapper'>
                <LinkScroll to='header' smooth={true}>
                    <div className='back-to-header'></div>
                </LinkScroll>
                <div className='information-block'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <p>
                        &copy; ООО СК "АПШЕРОН"
                        <br />
                        Все права защищены. 2010-2020
                    </p>
                    <p className='information-block__link'>
                        <a href='#'>Пользовательское соглашение</a>
                    </p>
                    <p className='information-block__link'>
                        <a href='#'>Карта сайта</a>
                    </p>
                    <p className='information-block__link'>
                        <a href='#'>Политика конфиденциальности</a>
                    </p>
                </div>
                <ul className='navigation-block'>
                    <li>
                        <LinkScroll to='presentation' smooth={true}>
                            О ресторане
                        </LinkScroll>
                    </li>
                    <li>
                        <Link to='delivery'>Условия доставки</Link>
                    </li>
                    <li>
                        <Link to='cancel'>Возврат товара</Link>
                    </li>
                    <li>
                        <Link to='promotion'>Акции</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
