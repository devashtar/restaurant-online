import React from 'react'
import './style'

import { Btn } from '@components/Btn'
import { useOrderStore, useFoodMenuStore } from '@hooks'

import iconBasket from '@assets/images/icons/basket.svg'
import iconPlus from '@assets/images/icons/plus.svg'
import iconMinus from '@assets/images/icons/minus.svg'

const prefix = '/images/menu/'

interface IProps {
    id: number
}

export const CardItem: React.FC<IProps> = ({ id }) => {
    const orderStore = useOrderStore()
    const foodMenuStore = useFoodMenuStore()

    const item = foodMenuStore.menu.find((el) => el.id === id)!
    const amount = orderStore.basket.find((el) => el.id === item.id)?.amount
    const isOrdered = !!amount

    return (
        <div className='card-item'>
            <figure className='img-wrapper'>
                <img src={prefix + item.img} alt='picture a food' />
            </figure>
            <div className='content-wrapper'>
                <div className='title-wrapper'>
                    <p className='dish-name'>{item.name}</p>
                    <p className='weight'>Вес: {item.data.weight} гр</p>
                </div>
                <p className='description'>{item.description}</p>
                <div className='subtitle-wrapper'>
                    {isOrdered && (
                        <Btn
                            icon={iconMinus}
                            onClick={() => orderStore.decreaseDishById(item.id)}
                        />
                    )}
                    <p className='price'>{item.price} ₽</p>
                    <Btn
                        icon={isOrdered ? iconPlus : iconBasket}
                        value={isOrdered ? undefined : 'В корзину'}
                        onClick={() => orderStore.addDishById(item.id)}
                    />
                </div>
            </div>
            {isOrdered && <div className='amount'>{amount}</div>}
        </div>
    )
}
