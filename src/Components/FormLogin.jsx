import React from 'react'
import './FormLogin.css'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import api from '../Services/api'


const FormLogin = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setLogin, setPerson} = useContext(AuthContext)
  const [loginerror, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputType, setInputType] = useState("password")



const submitForm = async (e) => {
  e.preventDefault()
  setLoginError(false)
 try {
    const response = await api.post('/auth', {
      email: username,
      password: password
    });
    const data = response.data;
    console.log(data)
    setPerson(username)
    setLogin(true)
    localStorage.setItem('token', data.token)
    localStorage.setItem('username', username)
    navigate('/menu')
  } catch (error) {
    console.log(error);
    setLoginError(true)
  } 
}; 

const autoLogin = async () => {

  if (localStorage.getItem('token') == null) {
return
  }

  const config = {
    headers: {
      'Authorization': `bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await api.get('/User', config);
    const data = response.data;
    setPerson(localStorage.getItem('username'))
    setLogin(true)
    navigate('/menu')
  } catch (error) {
    console.log(error);
  } 
}
  
const handleChangeUsername = event => {
  setUsername(event.target.value)
}

const handleChangePassword = event => {
  setPassword(event.target.value)
}

useEffect(() => {
  autoLogin()
}, [])


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
                        <input onChange={handleChangePassword} type={inputType} name="password" id="password" placeholder="Password"/>
                        <div className="underline"></div>
                        {loginerror && <div className='errologin'> Login ou senha incorretos. </div>}
                        </div>
                        <input disabled={loading ? true : false} type="submit" value={loading ? 'Carregando...' : 'Continuar'} id="button-login"/>
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