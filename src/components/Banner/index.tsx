import React from 'react'
import './style'

export const Banner: React.FC<{}> = () => {
    return (
        <div className='banner'>
            <div className='banner__inner-wrapper'>
                <h1 className='banner__title'>
                    ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ
                </h1>
                <SubTitle content='ЕЩЁ НЕ ПРОБОВАЛ?' />
            </div>
        </div>
    )
}

const SubTitle: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div data-text={content} className='banner__subtitle'>
            <p>{content}</p>
        </div>
    )
}
