import React from 'react'
import {
    IFoodMenuStore,
    ICustomerStore,
    IOrderStore,
    IDeliveryStore,
    IPaymentStore,
} from '@types'
import { FoodMenuContext } from '@store/Food-menu-store'
import { CustomerContext } from '@store/Customer-store'
import { OrderContext } from '@store/Order-store'
import { DeliveryContext } from '@store/Delivery-store'
import { PaymentContext } from '@store/Payment-store'

export const useFoodMenuStore = () => {
    const foodMenuStore = React.useContext(FoodMenuContext) as IFoodMenuStore
    return foodMenuStore
}

export const useCustomerStore = () => {
    const customerStore = React.useContext(CustomerContext) as ICustomerStore
    return customerStore
}

export const useOrderStore = () => {
    const orderStore = React.useContext(OrderContext) as IOrderStore
    return orderStore
}

export const useDeliveryStore = () => {
    const deliveryStore = React.useContext(DeliveryContext) as IDeliveryStore
    return deliveryStore
}

export const usePaymentStore = () => {
    const paymentStore = React.useContext(PaymentContext) as IPaymentStore
    return paymentStore
}
