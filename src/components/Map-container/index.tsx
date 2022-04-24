import React from 'react'
import './style'

interface IProps {
    children: React.ReactChild[] | React.ReactChild
}

export const MapContainer: React.FC<IProps> = ({ children }) => {
    return <div className='map-container'>{children}</div>
}
