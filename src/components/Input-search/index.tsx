import React, { useState } from 'react'
import './style'

export const InputSearch: React.FC<{}> = () => {
    const [value, setValue] = useState('')

    const handleSubmit: React.ReactEventHandler = (e) => {
        e.preventDefault()
        setValue('')
        console.log('Помощник по поиску нужного адреса для доставки еды.')
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                placeholder='Введите адрес доставки'
                onChange={(e) => setValue(e.target.value)}
            />
            <input type='submit' value='' />
        </form>
    )
}
