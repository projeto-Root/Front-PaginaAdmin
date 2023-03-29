import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import './Painel.css'

const Painel = () => {

  const {isLoged} = useContext(AuthContext)

  if (isLoged == false) {
    return <Navigate replace to="/"> </Navigate>
  }

  return (
    <div className='containerpainel'>
      <Navbar></Navbar>
      <div className='sidebarcontent'>
      <SideMenu></SideMenu>
      <div className='content'>
        <Outlet></Outlet>
      </div>
      </div>
    </div>
  )
}

export default Painel