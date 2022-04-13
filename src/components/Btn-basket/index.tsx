import React from 'react'
import './style'
import { useOrderStore } from '@/hooks'

import icon from '@assets/images/icons/basket.svg'

export const BtnBasket: React.FC<{}> = () => {
    const orderStore = useOrderStore()

    return (
        <button className='custom-btn-basket'>
            <img src={icon} alt='basket' />
            <p>Корзина</p>
            <span>{orderStore.getNumberOfDishes()}</span>
        </button>
    )
}
