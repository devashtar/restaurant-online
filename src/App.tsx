import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Category } from '@pages/Category'
import { Card } from '@pages/Card'
import { Basket } from '@pages/Basket'
import { Promotion } from '@pages/Promotion'
import { Delivery } from '@pages/Delivery'
import { NotFound } from '@pages/NotFound'

import { Header } from '@containers/Header'
import { Main } from '@containers/Main'
import { Footer } from '@containers/Footer'

export const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/' element={<Home />} />
                    <Route path='category' element={<Category />} />
                    <Route path='card' element={<Card />} />
                    <Route path='basket' element={<Basket />} />
                    <Route path='promotion' element={<Promotion />} />
                    <Route path='delivery' element={<Delivery />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    )
}
