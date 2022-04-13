import React from 'react'
import { TypeChildren } from '@/types'
import { FoodMenuProvider } from './Food-menu-store'
import { CustomerProvider } from './Customer-store'
import { OrderProvider } from './Order-store'
import { DeliveryProvider } from './Delivery-store'
import { PaymentProvider } from './Payment-store'

export const StoreProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    return (
        <FoodMenuProvider>
            <CustomerProvider>
                <OrderProvider>
                    <DeliveryProvider>
                        <PaymentProvider>{children}</PaymentProvider>
                    </DeliveryProvider>
                </OrderProvider>
            </CustomerProvider>
        </FoodMenuProvider>
    )
}
