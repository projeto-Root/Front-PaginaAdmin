import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Painel from './Pages/Painel'
import FormProf from './Components/FormProf'
import { AuthProvider } from './Context/AuthProvider'
import FormRepresentation from './Components/FormRepresentation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
   <Routes>
    <Route element={<App></App>}>
      <Route path='/' element={<LoginPage></LoginPage>}> </Route>
      <Route element={<Painel></Painel>} path='/menu'>  </Route>

       </Route>
      <Route element={<Painel></Painel>}>
            <Route element={<FormProf></FormProf>} path='/menu/formprof'></Route>
            <Route element={<FormRepresentation></FormRepresentation>} path='/menu/formrepresent'></Route>
      </Route>
   </Routes>
   </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,  
)
