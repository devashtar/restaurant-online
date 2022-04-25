import React from 'react'
import './style'

import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    const orderStore = useOrderStore()
    const foodMenuStore = useFoodMenuStore()

    const item = foodMenuStore.menu.find((el) => el.id === id)!
    const amount = orderStore.basket.find((el) => el.id === item.id)?.amount
    const isOrdered = !!amount

    const viewCard = () => {
        foodMenuStore.setActiveCard(id)
        navigate('/card')
    }

    const deleteDish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        orderStore.decreaseDishById(item.id)
    }

    const addDish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        orderStore.addDishById(item.id)
    }

    return (
        <div className='card-item' onClick={viewCard}>
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
                    {isOrdered && <Btn icon={iconMinus} onClick={deleteDish} />}
                    <p className='price'>{item.price} ₽</p>
                    <Btn
                        icon={isOrdered ? iconPlus : iconBasket}
                        value={isOrdered ? undefined : 'В корзину'}
                        onClick={addDish}
                    />
                </div>
            </div>
            {isOrdered && <div className='amount'>{amount}</div>}
        </div>
    )
}
