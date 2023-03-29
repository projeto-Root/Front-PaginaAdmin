import React from 'react'
import './FormLogin.css'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'


const FormLogin = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setLogin, setPerson} = useContext(AuthContext)
  const [loginerror, setLoginError] = useState(false)


const submitForm = (e) => {
  e.preventDefault()
  if (username == 'admin' && password == 'password') {
    setLogin(true)
    setPerson(username)
    navigate('/menu')
  } else {
    setLoginError(false)
    setTimeout(() => {
      setLoginError(true)
    },300)
    setPassword('')
    document.getElementById('password').value = ""
  }
}

const handleChangeUsername = event => {
  setUsername(event.target.value)
}

const handleChangePassword = event => {
  setPassword(event.target.value)
}

  return (
    <div>
       <div className="main-login">
            <div className="container-login">
                <div className="left-login">
                    <div className="card-login">
                        <h1 className="textoLogin">Faça login para continuar</h1>

                       <form className='formprof' onSubmit={submitForm}>
                       <div className="input-field">
                        <input onChange={handleChangeUsername} type="text" name="login" id="login" placeholder="Login"/>
                        <div className="underline"></div>
                        </div>

                        <div className="input-field">
                        <input onChange={handleChangePassword} type="password" name="password" id="password" placeholder="Password"/>
                        <div className="underline"></div>
                        {loginerror && <div className='errologin'> Login ou senha incorretos. </div>}
                        </div>
                        <input type="submit" value="Continuar"id="button-login"/>
                       </form>
                    </div>
                </div>

                <div id="linha-vertical"></div>

                <div className="right-login">
                
                        <img src="../../imgs/360_F_311356442_CzVoxEvjeDeII8vsScpPeO6pueOJ4p27.png" alt="" className="img-login"/>
                
                        <p>ROOT</p>
                        <p>admin</p>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FormLogin