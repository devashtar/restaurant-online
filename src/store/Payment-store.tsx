import React from 'react'
import { TypeChildren, TypeWayPayment, IPaymentStore, IPayment } from '@/types'
import { useFoodMenuStore, useOrderStore } from '@/hooks'

export const PaymentContext = React.createContext<IPaymentStore | null>(null)

export const PaymentProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    // используем "foodMenuStore" контекст для подсчета суммы к оплате
    const foodMenuStore = useFoodMenuStore()
    // используем "orderStore", чтобы получить данные из корзины клиента
    const orderStore = useOrderStore()

    const [payment, setPayment] = React.useState<IPayment>({
        wayPay: 'card',
        total: 0,
        money: 0,
        change: 0,
        limitForFreeDelivery: 3000,
    })
    // выбираем тип оплаты
    const setWayPayment = (arg: TypeWayPayment) => {
        setPayment((state) => ({ ...state, wayPay: arg }))
    }
    // считаем итоговую стоимость
    const calcTotalPrice = () => {
        const total = orderStore.basket.reduce((acc, prev) => {
            const idx = foodMenuStore.menu.findIndex((el) => el.id === prev.id)
            if (idx === -1) return acc
            return foodMenuStore.menu[idx].price + acc
        }, 0)
        setPayment((state) => ({ ...state, total }))
    }
    // считаем сдачу при оплате наличными
    const setCashMoney = (money: number) => {
        const change = money - payment.total
        setPayment((state) => ({ ...state, money, change }))
    }

    const value = React.useMemo(
        () =>
            ({
                ...payment,
                setWayPayment,
                calcTotalPrice,
                setCashMoney,
            } as IPaymentStore),
        [payment]
    )

    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    )
}
