import React from 'react'
import './style'

interface IProps {
    children: React.ReactChild | React.ReactChild[]
}

export const Main: React.FC<IProps> = ({ children }) => {
    return <main>{children}</main>
}
