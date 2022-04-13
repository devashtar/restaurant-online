import React from 'react'
import { TypeChildren, IFoodMenuStore, IFood, ICategory } from '@/types'

export const FoodMenuContext = React.createContext<IFoodMenuStore | null>(null)

export const FoodMenuProvider: React.FC<{ children: TypeChildren }> = ({
    children,
}) => {
    const [menu, setPayment] = React.useState<IFood[]>(initMenu)
    const [category, setCategory] =
        React.useState<ICategory[]>(initListCategory)

    const value = React.useMemo(
        () => ({ menu, category } as IFoodMenuStore),
        []
    )
    return (
        <FoodMenuContext.Provider value={value}>
            {children}
        </FoodMenuContext.Provider>
    )
}

const initMenu = [
    {
        id: 1,
        name: 'Ягнёнок',
        description:
            'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
        img: 'menu-1.jpg',
        price: 210,
        left: 10,
        data: {
            weight: 120,
            carbohydrates: 17.23,
            squirrels: 22.35,
            fats: 748,
            calories: 260,
        },
    },
    {
        id: 2,
        name: 'Гусь',
        description:
            'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
        img: 'menu-2.jpg',
        price: 230,
        left: 10,
        data: {
            weight: 120,
            carbohydrates: 17.23,
            squirrels: 22.35,
            fats: 748,
            calories: 260,
        },
    },
    {
        id: 3,
        name: 'Рыба',
        description:
            'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
        img: 'menu-3.jpg',
        price: 225,
        left: 10,
        data: {
            weight: 120,
            carbohydrates: 17.23,
            squirrels: 22.35,
            fats: 748,
            calories: 260,
        },
    },
    {
        id: 4,
        name: 'Грибы',
        description:
            'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
        img: 'menu-4.jpg',
        price: 245,
        left: 10,
        data: {
            weight: 120,
            carbohydrates: 17.23,
            squirrels: 22.35,
            fats: 748,
            calories: 260,
        },
    },
]

const initListCategory = [
    {
        name: 'Холодные закуски',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Горячие закуски',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Мясные блюда',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Супы',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Рыбные блюда',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Гриль меню',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'ФИрменные блюда',
        listFoodId: [1, 2, 3, 4],
    },
    {
        name: 'Напитки',
        listFoodId: [1, 2, 3, 4],
    },
]
