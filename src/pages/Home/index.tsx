import React from 'react'

import { Banner } from '@components/Banner'
import { CategoryFood } from '@components/Category-food'
import { MenuByCategory } from '@components/Menu-by-category'
import { Presentation } from '@components/Presentation'

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Banner />
            <CategoryFood />
            <MenuByCategory />
            <MenuByCategory borderTop order={3} />
            <MenuByCategory borderTop order={6} />
            <Presentation />
        </>
    )
}
