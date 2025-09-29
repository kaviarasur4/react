import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../shared/components/Home'
import Main from '../core/Main'
import About from '../shared/components/About'
import Contack from '../shared/components/Contack'
import RestaurantWebsite from '../shared/components/RestaurantWebsite'
import Orderonline from '../shared/components/Order Online'

export default function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contack' element={<Contack />} />
                    <Route path='/RestaurantWebsite' element={<RestaurantWebsite />} />
                    <Route path='/Order_Online' element={<Orderonline />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
