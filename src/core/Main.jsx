import React from 'react'
import Header from './Header'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'

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
