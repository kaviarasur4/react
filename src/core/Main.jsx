import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Fotter from './Fotter'

export default function Main() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Fotter/>
    </div>
  )
}
