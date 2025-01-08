import React from 'react'
import { TopBar } from '../widgets/Navbar/TopBar'
import { Navbar } from '../widgets/Navbar/Navbar'
import { ModalSearch } from '../widgets/Footer/ModalSearch'
import { Outlet } from 'react-router-dom'

export const Barras = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <ModalSearch />
    <main>
      <Outlet/>
    </main>
    </>
  )
}
