import React, { useState } from 'react'
import './style'

export const InputSearch: React.FC<{}> = () => {
    const [value, setValue] = useState('')

    const endpoint = process.env.ENDPOINT_URL
    const apiKey = process.env.API_KEY
    const query = 'рязань ленина'
    const requestExample = `${endpoint}?q=${query}&apiKey=${apiKey}`
    // реализовать выпадающий список с подсказками

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
