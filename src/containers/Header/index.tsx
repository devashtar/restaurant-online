import React from 'react'
import './style'

import { Link } from 'react-router-dom'

import { Logo } from '@components/Logo'
import { InputSearch } from '@components/Input-search'
import { Phone } from '@components/Phone'
import { BtnBasket } from '@components/Btn-basket'
import { Menu } from '@components/Menu'

interface IItemProps {
    gridArea: string
    children: React.ReactChild
}

export const Header: React.FC<{}> = () => {
    const [isMobile, setIsMobile] = React.useState<boolean>(false)

    React.useEffect(() => {
        const sizeListener = () => setIsMobile(window.innerWidth < 768)
        sizeListener()
        window.addEventListener('resize', sizeListener)
        return () => window.removeEventListener('resize', sizeListener)
    }, [])

    return (
        <header id='header'>
            {isMobile && (
                <Item gridArea='menu'>
                    <Menu />
                </Item>
            )}

            <Item gridArea='logo'>
                <Link to='/'>
                    <Logo />
                </Link>
            </Item>
            <Item gridArea='form'>
                <InputSearch />
            </Item>

            {!isMobile && (
                <Item gridArea='phone'>
                    <Phone />
                </Item>
            )}

            <Item gridArea='basket'>
                <Link to='basket'>
                    <BtnBasket />
                </Link>
            </Item>
        </header>
    )
}

const Item: React.FC<IItemProps> = ({ gridArea, children }) => {
    return <div style={{ gridArea }}>{children}</div>
}
