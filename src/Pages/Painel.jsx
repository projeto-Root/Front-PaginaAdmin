import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { useContext  } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import './Painel.css'
import api from '../Services/api'

const Painel = () => {

  const {isLoged, setLogin, setPerson} = useContext(AuthContext)

  const verifyToken = async () => {
    const config = {
      headers: {
        'Authorization': `bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    };
   try {
    const response = await api.get('/User', config);
    console.log(response)
  } catch (error) {
    console.log(error);
    setLogin(false)
    setPerson("")
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  } 
  }

  useEffect( () => {
    verifyToken()
  }, [])
  

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