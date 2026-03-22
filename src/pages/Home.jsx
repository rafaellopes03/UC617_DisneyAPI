// Importação do logo da Disney guardado nos assets
import disneyLogo from '../assets/Disney_logo.svg'

// Página inicial da aplicação
// Recebe a função onEntrar para navegar para a listagem de personagens
function Home({ onEntrar }) {
  return (
    <div className="home-page">

      {/* Secção superior com o logo da Disney */}
      <div className="home-top">
        <img
          src={disneyLogo}
          alt="Disney Logo"
          className="disney-logo"
        />
      </div>

      {/* Linha divisória decorativa */}
      <div className="home-divider">
        <span>✦</span>
      </div>

      {/* Secção inferior com descrição e botão de entrada */}
      <div className="home-bottom container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">

            <h2 className="home-titulo">Bem-vindo ao Mundo Mágico</h2>

            {/* Breve descrição da aplicação */}
            <p className="home-descricao">
              Explora o universo das personagens Disney através da{' '}
              <a href="https://disneyapi.dev" target="_blank" rel="noreferrer">
                Disney API
              </a>
              . Pesquisa os teus heróis e vilões favoritos, descobre em que
              filmes, séries e videojogos participaram e muito mais.
            </p>

            {/* Card com informação sobre a API utilizada */}
            <div className="home-api-card">
              <h5>Sobre a API</h5>
              <p>
                A <strong>Disney API</strong> é uma API pública e gratuita que
                disponibiliza dados sobre centenas de personagens, desde os
                clássicos da Disney até às personagens mais recentes.
              </p>
            </div>

            {/* Botão que leva o utilizador para a listagem de personagens */}
            <button className="home-btn" onClick={onEntrar}>
              Explorar Personagens
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home