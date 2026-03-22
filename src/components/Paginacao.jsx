// Componente de paginação — recebe a página atual, o total de páginas
// e uma função para mudar de página
function Paginacao({ paginaAtual, totalPaginas, onMudarPagina }) {
  return (
    <div className="paginacao">
      {/* Botão anterior — desativado quando estamos na primeira página */}
      <button 
        onClick={() => onMudarPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
      >
        Anterior
      </button>
      {/* Indicador da página atual e total */}
      <span>{paginaAtual} / {totalPaginas}</span>

      {/* Botão próxima — desativado quando estamos na última página */}
      <button 
        onClick={() => onMudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
      >
        Próxima
      </button>
    </div>
  )
}

export default Paginacao