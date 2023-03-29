import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {setLogin, user} = useContext(AuthContext)
  const navigate = useNavigate()

const logOutFunc = () => {
  setLogin(false)
  navigate('/')
}

  return (
    <div>
      <div className="cabecalho_container">
                <div className="cabecalho_itens">
                    <img src="https://img.freepik.com/premium-vector/electronic-tree-concept_268276-306.jpg?size=338&ext=jpg" title='Root' className="logo_root_cabecalho" alt="logo root"/>
                    <p> <u> {user} </u>  </p>
                </div>
                <ul className="cabecalho_itens_li">
                    <li> <p>ROOT admin </p> </li>
                    <li onClick={logOutFunc}> <img src="../../imgs/login.png" title='Sair' className="login_icon" alt="login-icon"/></li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar