import React from 'react'
import { CardView } from '@components/Card-view'
import { MenuByCategory } from '@components/Menu-by-category'
import { MapContainer } from '@components/Map-container'
import { Contacts } from '@components/Contacts'

export const Card: React.FC<{}> = () => {
    return (
        <>
            <CardView />
            <MenuByCategory showPopular />
            <MapContainer mt={1}>
                <Contacts />
            </MapContainer>
        </>
    )
}
