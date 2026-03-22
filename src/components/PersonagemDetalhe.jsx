// Componente de detalhe de um personagem
// Recebe o objeto personagem e uma função para voltar à listagem
function PersonagemDetalhe({ personagem, onVoltar }) {
  return (
    <div className="container py-4">
      <div className="personagem-detalhe">
        <img
          src={personagem.imageUrl}
          alt={personagem.name}
        />
        {/* Nome do personagem */}
        <h2 className="mt-3">{personagem.name}</h2>
        
        {/* Lista de filmes — só aparece se o personagem tiver filmes */}
        {personagem.films?.length > 0 && (
          <div className="mt-3">
            <h3>Filmes</h3>
            <ul>
              {personagem.films.map((filme) => (
                <li key={filme}>{filme}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lista de séries — só aparece se o personagem tiver séries */}
        {personagem.tvShows?.length > 0 && (
          <div className="mt-3">
            <h3>Séries</h3>
            <ul>
              {personagem.tvShows.map((serie) => (
                <li key={serie}>{serie}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Lista de videojogos — só aparece se o personagem tiver videojogos */}
        {personagem.videoGames?.length > 0 && (
          <div className="mt-3">
            <h3>Videojogos</h3>
            <ul>
              {personagem.videoGames.map((jogo) => (
                <li key={jogo}>{jogo}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botão para voltar à listagem */}
        <button onClick={onVoltar} className="mb-4">← Voltar</button>

      </div>
      
    </div>
  )
}

export default PersonagemDetalhe