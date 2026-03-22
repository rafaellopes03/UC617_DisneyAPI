import { useState } from 'react'

// Componente da barra de controlos — pesquisa e ordenação
// Recebe funções para pesquisar e ordenar vindas do App
function BarraPesquisa({ onPesquisar, onOrdenar}) {
  
  // Estado local para o texto do campo de pesquisa
  const [texto, setTexto] = useState('')
  
  // Ao submeter o formulário, chama a função de pesquisa com o texto atual
  function handleSubmit(e) {
    e.preventDefault()
    onPesquisar(texto)
  }

  return (
    <div className="barra-controles">
      
      {/* Formulário de pesquisa por nome */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar personagem..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>

      {/* Select de ordenação — chama onOrdenar ao mudar o valor */}
      <select onChange={(e) => onOrdenar(e.target.value)} defaultValue="">
        <option value="">Ordenação</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>
    </div>
  )
}

export default BarraPesquisa