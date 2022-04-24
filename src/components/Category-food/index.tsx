import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style'
import { useFoodMenuStore } from '@hooks'

export const CategoryFood: React.FC<{}> = () => {
    const foodMenuStore = useFoodMenuStore()

    return (
        <Swiper id='food-menu' className='category-food' slidesPerView={'auto'}>
            {foodMenuStore.category.map((item, idx) => (
                <SwiperSlide
                    key={idx}
                    className='category-food__item'
                    onClick={() => foodMenuStore.setActiveCategory(idx)}
                >
                    <p className={item.isActive ? 'active' : ''}>{item.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
