import React from 'react'
import './style'

import { ReactComponent as IconLocation } from '@assets/images/icons/location.svg'
import { ReactComponent as IconMessage } from '@assets/images/icons/message.svg'

import iconFacebook from '@assets/images/icons/facebook.svg'
import iconB from '@assets/images/icons/b.svg'
import iconYoutube from '@assets/images/icons/youtube.svg'
import iconInstagram from '@assets/images/icons/instagram.svg'

import { Btn } from '@components/Btn'

export const Contacts: React.FC<{}> = () => {
    return (
        <div className='contacts'>
            <h2 className='title'>КОНТАКТЫ</h2>
            <ul className='list-information'>
                <li>
                    <div>
                        <IconLocation />
                    </div>
                    <div className='content-wrapper'>
                        <p>Наш адрес:</p>
                        <p>
                            МО, городской округ Красногорск, село Ильинкое,
                            Экспериментальная улица, 10
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <IconMessage />
                    </div>
                    <div className='content-wrapper'>
                        <p>Наша почта:</p>
                        <p>born.to.be.wild@gmail.com</p>
                    </div>
                </li>
            </ul>
            <div className='grid-block'>
                <Btn value='ЗАБРОНИРОВАТЬ СТОЛ' height={46} />
                <div className='phone-wrapper'>
                    <p>+ 7 (917) 510-57-59</p>
                    <p>Звоните или оставьте заявку</p>
                </div>

                <p className='about-text'>Мы в соц сетях:</p>
                <ul className='list-icons'>
                    <li>
                        <a target='_blank' href='https://www.facebook.com/'>
                            <img src={iconFacebook} alt='facebook' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.booking.com/'>
                            <img src={iconB} alt='booking' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.youtube.com/'>
                            <img src={iconYoutube} alt='youtube' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.instagram.com/'>
                            <img src={iconInstagram} alt='instagram' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
