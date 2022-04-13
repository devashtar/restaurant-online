import React from 'react'
import { TypeChildren, IOrderStore, IDish } from '@/types'

export const OrderContext = React.createContext<IOrderStore | null>(null)

export const OrderProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    const [orderId, setOrderId] = React.useState<string>('uuid')
    const [basket, setBasket] = React.useState<IDish[]>([])

    const addDishById = (id: number) => {
        setBasket((state) => {
            const basket = state.map((el) =>
                el.id === id ? { ...el, amount: el.amount + 1 } : el
            )
            if (basket.length === 0) basket.push({ id, amount: 1 })
            return basket
        })
    }

    const removeDishById = (id: number) => {
        setBasket((state) => state.filter((el) => el.id !== id))
    }

    const getNumberOfDishes = (): number => {
        return basket.reduce((acc, prev) => (acc += prev.amount), 0)
    }

    const value = React.useMemo(
        () =>
            ({
                orderId,
                basket,
                addDishById,
                removeDishById,
                getNumberOfDishes,
            } as IOrderStore),
        [orderId, basket]
    )
    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    )
}
