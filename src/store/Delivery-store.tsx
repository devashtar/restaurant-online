import React from 'react'
import {
    TypeChildren,
    IDeliveryStore,
    IDelivery,
    TypeWayDelivery,
} from '@/types'

export const DeliveryContext = React.createContext<IDeliveryStore | null>(null)

export const DeliveryProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    const [delivery, setDelivery] = React.useState<IDelivery>({
        isShipsByCourier: false,
        restaurantAddress: '',
        appointedTime: null,
    })

    const setWayDelivery = (arg: TypeWayDelivery) => {
        setDelivery((state) => ({
            ...state,
            isShipsByCourier: arg === 'courier',
        }))
    }

    const setAddressRestaurant = (arg: string) => {
        setDelivery((state) => ({ ...state, restaurantAddress: arg }))
    }

    const setAppointedTime = (arg: string | null) => {
        setDelivery((state) => ({ ...state, appointedTime: arg }))
    }

    const value = React.useMemo(
        () =>
            ({
                ...delivery,
                setWayDelivery,
                setAddressRestaurant,
                setAppointedTime,
            } as IDeliveryStore),
        [delivery]
    )

    return (
        <DeliveryContext.Provider value={value}>
            {children}
        </DeliveryContext.Provider>
    )
}
