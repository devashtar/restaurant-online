import React from 'react'
import './style'
import { useNavigate } from 'react-router-dom'

interface IProps {
    path?: string
    value: string
}

export const TurnBack: React.FC<IProps> = ({ path, value }) => {
    const navigate = useNavigate()

    const handlerClick = () => {
        if (path) {
            navigate(path)
        } else {
            navigate(-1)
        }
    }

    return (
        <div onClick={handlerClick} className='turn-back'>
            <span></span>
            <p>{value}</p>
        </div>
    )
}
