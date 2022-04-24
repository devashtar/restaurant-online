import React from 'react'
import './style'
import { Link } from 'react-scroll'

import { ReactComponent as IconFood } from '@assets/images/icons/food.svg'
import { ReactComponent as IconFoodMenu } from '@assets/images/icons/food-menu.svg'
import { ReactComponent as IconChef } from '@assets/images/icons/chef.svg'
import { ReactComponent as IconFlesh } from '@assets/images/icons/flash.svg'
import { ReactComponent as IconOnion } from '@assets/images/icons/onion.svg'

import { Btn } from '@components/Btn'
import { MapContainer } from '@components/Map-container'
import { Contacts } from '@components/Contacts'

/* Статья об SVG(работа размерами): https://www.digitalocean.com/community/tutorials/svg-preserve-aspect-ratio */

export const Presentation: React.FC<{}> = () => {
    const [idActiveCard, setIdActiveCard] = React.useState(1)
    const [listCards, setListCards] = React.useState(listPresentation)

    React.useEffect(() => {
        setListCards(() =>
            listPresentation.filter((el) => el.id !== idActiveCard)
        )
    }, [idActiveCard])

    const currentCard = React.useMemo(
        () => listPresentation.find((el) => el.id === idActiveCard)!,
        [idActiveCard]
    )

    return (
        <section id='presentation' className='presentation-block'>
            <div className='presentation-block__inner-wrapper'>
                <div className='bg-block'>
                    <div className='mask'>
                        <div className='text-block'>
                            <h2 className='title'>{currentCard.title}</h2>
                            <div className='subtitle'>
                                {currentCard.subtitle}
                            </div>
                            {currentCard.isButton && (
                                <Link to='food-menu' smooth={true}>
                                    <Btn value='Посмотреть меню' />
                                </Link>
                            )}
                        </div>
                        <div className='card-block'>
                            {listCards.map((item) => (
                                <div
                                    key={item.id}
                                    className='item'
                                    onClick={() => setIdActiveCard(item.id)}
                                >
                                    {item.icon}
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <MapContainer>
                <Contacts />
            </MapContainer>
        </section>
    )
}

const listPresentation = [
    {
        id: 1,
        title: 'НАШЕ КАФЕ',
        subtitle: `Мы расположены в одном из самых живописных мест города — на 
        берегу реки, это ваш оазис в черте города, куда можно сбежать от 
        шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все 
        продумано до мелочей: проект построен из дикого закарпатского сруба, 
        камин в основном зале ресторана и панорамные окна с видом на реку, 
        уютные беседки на берегу реки и лучшая видовая терраса, шатер с 
        посадкой на 200 человек, сказочный детский домик и бассейн.`,
        icon: <IconFood />,
    },
    {
        id: 2,
        title: 'СВЕЖАЙШИЕ ПРОДУКТЫ',
        subtitle: `Безусловно, новая модель организационной деятельности, в 
        своём классическом представлении, допускает внедрение прогресса 
        профессионального сообщества. Внезапно, стремящиеся вытеснить 
        традиционное производство, нанотехнологии будут объявлены нарушающими 
        общечеловеческие нормы этики и морали. Также как перспективное 
        планирование позволяет выполнить важные задания по разработке вывода 
        текущих активов.`,
        icon: <IconOnion />,
    },
    {
        id: 3,
        title: 'БЫСТРАЯ ДОСТАВКА',
        subtitle: `Ясность нашей позиции очевидна: убеждённость некоторых 
        оппонентов требует определения и уточнения укрепления моральных 
        ценностей. В целом, конечно, реализация намеченных плановых 
        заданий требует определения и уточнения первоочередных требований. 
        Предварительные выводы неутешительны: дальнейшее развитие различных 
        форм деятельности в значительной степени обусловливает важность 
        переосмысления внешнеэкономических политик.`,
        icon: <IconFlesh />,
    },
    {
        id: 4,
        title: 'ЛУЧШИЕ ПОВАРА',
        subtitle: `Следует отметить, что граница обучения кадров создаёт 
        необходимость включения в производственный план целого ряда 
        внеочередных мероприятий с учётом комплекса вывода текущих активов. 
        В своём стремлении улучшить пользовательский опыт мы упускаем, что 
        сторонники тоталитаризма в науке неоднозначны и будут обнародованы. С 
        другой стороны, курс на социально-ориентированный национальный проект 
        способствует подготовке и реализации экономической целесообразности 
        принимаемых решений.`,
        icon: <IconChef />,
    },
    {
        id: 5,
        title: 'ОСОБЕННОЕ МЕНЮ',
        subtitle: `Кстати, базовые сценарии поведения пользователей будут 
        превращены в посмешище, хотя само их существование приносит несомненную 
        пользу обществу. Мы вынуждены отталкиваться от того, что сложившаяся 
        структура организации, а также свежий взгляд на привычные вещи - 
        безусловно открывает новые горизонты для как самодостаточных, так и 
        внешне зависимых концептуальных решений. Современные технологии 
        достигли такого уровня, что синтетическое тестирование требует от нас 
        анализа укрепления моральных ценностей.`,
        icon: <IconFoodMenu />,
        isButton: true,
    },
]
