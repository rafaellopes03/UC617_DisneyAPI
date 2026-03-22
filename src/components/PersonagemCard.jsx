// Componente de cartão de personagem — exibe a imagem e o nome
// Recebe o objeto personagem e uma função para ver os detalhes
function PersonagemCard({ personagem, onVerDetalhes }) {
  return (
    // Ao clicar no cartão, chama a função com o id do personagem
    <div
      className="personagem-card h-100"
      onClick={() => onVerDetalhes(personagem._id)}
      role="button"
      tabIndex={0}
      // Acessibilidade: permite navegar com o teclado (tecla Enter)
      onKeyDown={(e) => e.key === 'Enter' && onVerDetalhes(personagem._id)}
    >
      <img
        src={personagem.imageUrl}
        alt={personagem.name}
        className="w-100"
      />
      <h3 className="p-2 text-center">{personagem.name}</h3>
    </div>
  )
}

export default PersonagemCard