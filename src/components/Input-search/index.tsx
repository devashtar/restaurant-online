import React from 'react'
import './style'
import { useDeliveryStore } from '@/hooks'

export const InputSearch: React.FC<{}> = () => {
    const deliveryStore = useDeliveryStore()

    const inputEl = React.useRef<HTMLInputElement>(null)
    const [showHints, setShowHints] = React.useState(false)

    const ulEl = React.useRef<HTMLUListElement>(null)
    const [idxLiFocused, setIdxLiFocused] = React.useState<number>(-1)

    const [value, setValue] = React.useState<string>('')
    const [addressList, setAddressList] = React.useState<string[]>([])
    // timer используем для задержки перед запросом
    const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
        if (timer) {
            clearTimeout(timer)
            setTimer(null)
        }
        setTimer(
            setTimeout(() => {
                value !== '' && idxLiFocused === -1 && genList(value)
            }, 500)
        )
        return () => {
            if (timer !== null) {
                clearTimeout(timer)
                setTimer(null)
            }
        }
    }, [value])

    const handleSubmit: React.ReactEventHandler = async (e) => {
        e.preventDefault()
        if (value.trim() === '') return setValue('')
        deliveryStore.setAddressRestaurant(value)
        setValue('')
        if (inputEl.current !== null) {
            inputEl.current.blur()
        }
    }

    const genList = async (val: string) => {
        const data = await getHintList(val)
        if (data === null || data.items?.length === 0) return
        const list: string[] = []
        for (const item of data.items) {
            list.push(item.title)
        }
        setAddressList(list)
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setValue(val)
        if (val === '') setAddressList([])
    }

    const chooseAddress = (name: string) => {
        deliveryStore.setAddressRestaurant(name)
        setValue('')
        setShowHints(false)
        if (inputEl.current !== null) inputEl.current.blur()
    }

    const chooseOption = (key: string) => {
        if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(key)) return

        if (ulEl.current && inputEl.current) {
            if (key === 'Enter') {
                if (idxLiFocused !== -1) chooseAddress(inputEl.current.value)
                return
            }

            const len = ulEl.current.children.length
            if (len !== 0) {
                let i: number,
                    idx: number = 0
                if (key === 'ArrowUp') {
                    i = idxLiFocused !== -1 ? idxLiFocused - 1 : len - 1
                    idx = i < 0 ? -1 : i
                } else if (key === 'ArrowDown') {
                    i = idxLiFocused !== -1 ? idxLiFocused + 1 : 0
                    idx = i > len - 1 ? -1 : i
                }
                if (idx !== -1) {
                    ;(ulEl.current.children[idx] as HTMLLIElement).focus()
                    setValue(
                        (ulEl.current.children[idx] as HTMLLIElement).title
                    )
                } else {
                    inputEl.current.focus()
                }
                setIdxLiFocused(idx)
            }
        }
    }

    function selectFocus(idx: number) {
        ;(ulEl.current?.children[idx] as HTMLLIElement).focus()
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form__input-wrapper'>
                <input
                    ref={inputEl}
                    type='text'
                    className={deliveryStore.restaurantAddress ? 'found' : ''}
                    placeholder={
                        deliveryStore.restaurantAddress
                            ? 'Ok, адрес принят )'
                            : 'Выберите адрес ресторана'
                    }
                    spellCheck={false}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={(e) => chooseOption(e.key)}
                    onFocus={() => setShowHints(true)}
                    onBlur={() => setShowHints(false)}
                />
                <input type='submit' value='' />
            </div>

            <ul
                ref={ulEl}
                role='listbox'
                className='hint-list'
                onKeyDown={(e) => chooseOption(e.key)}
                onFocus={() => setShowHints(true)}
                onBlur={() => setShowHints(false)}
            >
                {showHints &&
                    addressList.map((name, idx) => (
                        <li
                            key={idx}
                            role='option'
                            className='hint-list__item'
                            title={name}
                            tabIndex={-1}
                            onClick={() => chooseAddress(name)}
                            onMouseEnter={() => selectFocus(idx)}
                            onMouseLeave={() => setIdxLiFocused(-1)}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </form>
    )
}

const endpoint = process.env.ENDPOINT_URL
const apiKey = process.env.API_KEY
const limit = 3

interface IResponse {
    items: {
        title: string
    }[]
}

async function getHintList(query: string): Promise<IResponse | null> {
    if (!endpoint || !apiKey) return null
    const url = `${endpoint}?lang=ru&q=${query}&limit=${limit}&apiKey=${apiKey}`
    let data: IResponse | null = null
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(response.statusText)
        data = await response.json()
    } catch (err) {
        if (err instanceof Error) {
            err.message +=
                'Ошибка во время запроса на получение списка адресов.\n'
        }
        console.error(err)
    } finally {
        return data
    }
}
