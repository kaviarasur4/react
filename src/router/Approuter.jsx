import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../shared/components/Home'
import Main from '../core/Main'
import About from '../shared/components/About'

export default function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}