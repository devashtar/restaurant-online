import React from 'react'
import { TypeChildren, ICustomerStore, ICustomer } from '@/types'

export const CustomerContext = React.createContext<ICustomerStore | null>(null)

export const CustomerProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    const [customer, setCustomer] = React.useState<ICustomer>({
        username: '',
        tel: '',
        address: '',
        isCallBack: false,
    })

    const setUsername = (arg: string) => {
        setCustomer((state) => ({ ...state, username: arg }))
    }

    const setPhoneNumber = (arg: string) => {
        setCustomer((state) => ({ ...state, tel: arg }))
    }

    const setCustomerAddress = (arg: string) => {
        setCustomer((state) => ({ ...state, address: arg }))
    }

    const setCallBack = (arg: boolean) => {
        setCustomer((state) => ({ ...state, isCallBack: arg }))
    }

    const value = React.useMemo(
        () =>
            ({
                ...customer,
                setUsername,
                setPhoneNumber,
                setCustomerAddress,
                setCallBack,
            } as ICustomerStore),
        [customer]
    )
    return (
        <CustomerContext.Provider value={value}>
            {children}
        </CustomerContext.Provider>
    )
}
