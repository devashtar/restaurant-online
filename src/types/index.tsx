/* ========== COMMON TYPES ========== */

export type TypeChildren = React.ReactChild | React.ReactChild[]

/* ========== CUSTOMER STORE TYPES ========== */

export interface ICustomer {
    username: string // имя клиента
    tel: string //  телефон клиента
    address: string // адрес клиента
    isCallBack: boolean // перезванивать ли клиенту
}

export interface ICustomerStore extends ICustomer {
    setUsername: (param: string) => void
    setPhoneNumber: (param: string) => void
    setCustomerAddress: (param: string) => void
    setCallBack: (param: boolean) => void
}

/* ========== ORDER STORE TYPES ========== */

export interface IDish {
    id: number // id блюда
    amount: number //  количество заказанных блюд в корзине с данным id
}

export interface IOrderStore {
    orderId: string // id заказа
    basket: Array<IDish> // корзина
    addDishById: (param: number) => void
    removeDishById: (param: number) => void
    getNumberOfDishes: () => number
}

/* ========== DELIVERY STORE TYPES ========== */

const waysDelivery = {
    courier: 'courier', // доставка курьером
    pickup: 'pickup', // самовывоз
} as const

export type TypeWayDelivery = typeof waysDelivery[keyof typeof waysDelivery]

export interface IDelivery {
    isShipsByCourier: boolean // доставка курьером или самовывоз
    restaurantAddress: string // адрес ресторана(при самовывозе)
    appointedTime: string | null // время к которому приготовить заказ. Null - забрать сразу
}

export interface IDeliveryStore extends IDelivery {
    setWayDelivery: (param: TypeWayDelivery) => void
    setChooseAddressRestaurant: (param: string) => void
    setAppointedTime: (param: string | null) => void
}

/* ========== PAYMENT STORE TYPES ========== */

const waysPayment = {
    cash: 'cash', // наличными
    online: 'online', //  онлаин
    card: 'card', // карточкой
} as const

export type TypeWayPayment = typeof waysPayment[keyof typeof waysPayment]

export interface IPayment {
    wayPay: TypeWayPayment
    total: number // итоговая сумма для оплаты
    money: number // сумма денег, которыми платит клиент(при оплате наличными)
    change: number // сдача с денег клиента(при оплате наличными)
    limitForFreeDelivery: number // при превышении этого порога - бесплатная доставка
}

export interface IPaymentStore extends IPayment {
    setWayPayment: (param: TypeWayPayment) => void
    calcTotalPrice: () => void
    setCashMoney: (param: number) => void
}

/* ========== FOODMENU STORE TYPES ========== */

export interface IFood {
    id: number // id блюда
    name: string // название
    description: string //описание
    img: string // название файла изображения
    price: number // стоимость
    left: number // осталось по наличию
    data: {
        weight: number // вес
        carbohydrates: number // углеводы
        squirrels: number // белки
        fats: number // жиры
        calories: number // калории
    }
}

export interface ICategory {
    name: string // наименование категории блюд
    listFoodId: number[] // id блюд в данной категории
}

export interface IFoodMenuStore {
    menu: IFood[] // список блюд
    category: ICategory[] // список категорий
}
