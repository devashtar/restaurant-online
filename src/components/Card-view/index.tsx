import React from 'react'
import './style'
import { animateScroll } from 'react-scroll'
import { useFoodMenuStore, useOrderStore } from '@hooks'

import { TurnBack } from '@components/Turn-back'
import { Btn } from '@components/Btn'
import IconShoppingBag from '@assets/images/icons/shopping-bag.svg'

const prefix = '/images/menu/'

export const CardView: React.FC<{}> = () => {
    const foodMenuStore = useFoodMenuStore()
    const orderStore = useOrderStore()

    React.useEffect(() => {
        animateScroll.scrollToTop()
    }, [])

    const item = foodMenuStore.activeDish

    return (
        <section id='card-view' className='card-view-container'>
            <TurnBack value='Вернуться обратно' />
            {item === null ? (
                <p className='empty-card'>Вы не выбрали блюдо</p>
            ) : (
                <div className='card-view-container__inner-wrapper'>
                    <img src={prefix + item.img} alt='picture of a dish' />
                    <div className='card-view-container__content'>
                        <div className='content-wrapper'>
                            <h3 className='title'>{item.name}</h3>
                            <p className='subtitle'>{item.description}</p>
                            <p className='weight'>Вес: {item.data.weight} г</p>

                            <div className='btn-wrapper'>
                                <Btn
                                    value='В корзину'
                                    icon={IconShoppingBag}
                                    onClick={() =>
                                        orderStore.addDishById(item.id)
                                    }
                                />
                                <p>{item.price} ₽</p>
                            </div>
                        </div>
                        <div className='table-wrapper'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Белки</td>
                                        <td>Жиры</td>
                                        <td>Углеводы</td>
                                        <td>Ккал</td>
                                        <td>Вес</td>
                                    </tr>
                                    <tr>
                                        <td>{item.data.squirrels}</td>
                                        <td>{item.data.fats}</td>
                                        <td>{item.data.carbohydrates}</td>
                                        <td>{item.data.calories}</td>
                                        <td>{item.data.weight} г</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
