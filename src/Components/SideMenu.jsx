import React from 'react'
import { Link } from 'react-router-dom'
import './SideMenu.css'

const SideMenu = () => {
  return (
    <div className="barra_lateral">
      <ul className="lista_barra_lateral">
        <li>
          <Link to='/menu/formprof'>
            <img title='Adicionar Professor' src="../../imgs/adicionar-usuario.png" className="icone__item" alt="icone-adicionar" />
          </Link>

        </li>

        <li>
          <Link>
            <img src="../../imgs/de-volta-no-tempo.png" className="icone__item" alt="icone-adicionar" />
          </Link>
        </li>

        <li>
          <Link>
            <img src="../../imgs/escrever.png" className="icone__item" alt="icone-adicionar" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu