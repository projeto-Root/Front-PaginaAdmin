import React from 'react'
import './FormRepresentation.css'

const FormRepresentation = () => {
  return (
    <div>
        <div className="card_container">
            <div className="card_adicionar_professor">
                <h1 className="titulo_card_adicionar_prof">Adicionar Membro de representação</h1>
                <div className="imagem_box">
                    <img src="../../imgs/do-utilizador.png" className="imagem_usuario" alt=""/>
                    <input type="submit" value="Anexar Imagem"id="button_imagem_professor"/>
                </div>

                <div className="inputs_container_profs">

                    <div className="inputs_dados_professor">
                        <input type="text" name="nome_professor" className="dados_do_professor" placeholder="Nome do representante"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs_dados_professor">
                        <input type="text" name="area_professor" className="dados_do_professor" placeholder="Cargo do membro"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs_dados_professor">
                        <input type="text" name="subarea_professor" className="dados_do_professor" placeholder="Contato"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs_dados_professor">
                        <select name="representacoes" className="select">
                            <option value="select" className="placeholder-ini">Selecione a representação</option>
                            <option value="Atletica" className="placeholder">Atlética</option>
                            <option value="Calicomp" className="placeholder">Calicomp</option>
                            <option value="Softeam" className="placeholder">Softeam</option>
                        </select>
                        <div className="underline"></div>
                    </div>

                    <div className='buttonsubmit'>
                    <input type="submit" value="Enviar" className="button_enviar_dados" />
                    </div>
               </div>
            </div>
       
        </div>
    </div>
  )
}

export default FormRepresentation