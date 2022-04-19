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
            const idx = state.findIndex((el) => el.id === id)
            if (idx === -1) {
                return [...state, { id, amount: 1 }]
            }
            return state.map((el) =>
                el.id === id ? { ...el, amount: el.amount + 1 } : el
            )
        })
    }

    const removeDishById = (id: number) => {
        setBasket((state) => state.filter((el) => el.id !== id))
    }

    const decreaseDishById = (id: number) => {
        setBasket((state) => {
            const idx = state.findIndex((el) => el.id === id)
            if (idx !== -1) {
                const q = state[idx].amount
                if (q <= 1) {
                    return state.filter((el) => el.id !== id)
                }
                return state.map((el) =>
                    el.id === id ? { id, amount: q - 1 } : el
                )
            }
            return state
        })
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
                decreaseDishById,
                getNumberOfDishes,
            } as IOrderStore),
        [orderId, basket]
    )
    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    )
}
