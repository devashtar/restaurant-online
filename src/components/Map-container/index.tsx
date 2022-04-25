import React from 'react'
import './style'

interface IProps {
    children: React.ReactChild[] | React.ReactChild
    mt?: number
}

export const MapContainer: React.FC<IProps> = ({ children, mt }) => {
    const marginTop = mt ? mt + 'em' : '0'

    return (
        <div style={{ marginTop }} className='map-container'>
            {children}
        </div>
    )
}
