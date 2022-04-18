import React from 'react'

import { Banner } from '@components/Banner'
import { CategoryFood } from '@components/Category-food'

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Banner />
            <CategoryFood />
        </>
    )
}
