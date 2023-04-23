import React from 'react'
import './FormProf.css'

const FormProf = () => {

    // Verificar se o token do usuário permite acesso à essa página.

  return (
        <div className="card_container">
            <div className="card_adicionar_professor">
                <h1 className="titulo_card_adicionar_prof">Adicionar Professor</h1>
                <div className="imagem_box">
                    <img src="../../imgs/do-utilizador.png" className="imagem_usuario" alt=""/>
                    <input type="submit" value="Anexar Imagem"id="button_imagem_professor"/>
                </div>

                <div className="inputs_container_profs">

                    <div className="inputs_dados_professor">
                        <input type="text" name="nome_professor" className="dados_do_professor" placeholder="Nome"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs_dados_professor">
                        <input type="text" name="area_professor" className="dados_do_professor" placeholder="Área"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs_dados_professor">
                        <input type="text" name="subarea_professor" className="dados_do_professor" placeholder="Subárea"/>
                        <div className="underline"></div>
                    </div>
                    <div className="inputdados_professor">
                        <input type="text" name="descricao_professor" className="dados_do_professor" placeholder="Descrição (opcional)"/>
                        <div className="underline"></div>
                    </div>


                    <input type="submit" value="Enviar" className="button_enviar_dados" />
               </div>
            </div>
       
          </div>
  )
}

export default FormProf