import React from 'react'
import './style'

type Enumerate<
    N extends number,
    Acc extends number[] = []
> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
>

interface IProps {
    value?: string
    onClick?: () => void
    icon?: string
    iconPosition?: 'left' | 'right'
    iconSize?: number
    fontSize?: number
    height?: Range<40, 61>
    fullWidth?: boolean
}

interface IStyles {
    background: string
    fontSize: string
    padding: string
    height: string // высота контейнера
    width: string
}

export const Btn: React.FC<IProps> = ({
    value,
    onClick,
    fontSize = 14,
    icon,
    iconPosition = 'right',
    iconSize = 24,
    height = 40,
    fullWidth = false,
}) => {
    const styles: Partial<IStyles> = {}
    if (icon) {
        const position = value ? `center ${iconPosition} 16px` : 'center'
        styles.background = `var(--green-color) ${position} / ${iconSize}px  no-repeat url(${icon})`
        styles.padding =
            iconPosition === 'right'
                ? `0px ${iconSize + 30}px 0px 16px`
                : `0px 16px 0px ${iconSize + 30}px`
    }

    styles.height = height + 'px'
    styles.width = fullWidth ? '100%' : 'auto'
    styles.fontSize = fontSize + 'px'

    return (
        <button onClick={onClick} style={styles} className='custom-btn'>
            {value}
        </button>
    )
}
