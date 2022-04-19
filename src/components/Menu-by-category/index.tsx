import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style'
import { useFoodMenuStore } from '@hooks'
import { CardItem } from '@components/Card-item'

interface IProps {
    order?: number
    borderTop?: boolean
}

export const MenuByCategory: React.FC<IProps> = ({ order, borderTop }) => {
    const foodMenuStore = useFoodMenuStore()

    const index =
        order !== undefined
            ? order
            : foodMenuStore.category.findIndex(({ isActive }) => isActive)

    const currentCategory = foodMenuStore.category[index]

    return (
        <section className={'menu-by-category' + (borderTop ? ' line' : '')}>
            <h2 className='menu-by-category__title'>{currentCategory.name}</h2>
            <Swiper
                className='menu-by-category__slider'
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    // когда ширина больше 480
                    480: {
                        slidesPerView: 'auto',
                    },
                }}
            >
                {currentCategory.listFoodId.map((id, index) => (
                    <SwiperSlide
                        key={index}
                        className='menu-by-category__swipe-slide'
                    >
                        <CardItem id={id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
