import { useState, useEffect } from 'react'
import { getCharacters, getCharactersById } from './services/disneyApi.js'
import BarraPesquisa from './components/BarraPesquisa.jsx'
import PersonagemCard from './components/PersonagemCard.jsx'
import Paginacao from './components/Paginacao.jsx'
import PersonagemDetalhe from './components/PersonagemDetalhe.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Número de personagens exibidos por página na listagem
const PAGE_SIZE = 12

function App() {
  // Lista completa de personagens carregados da API
  const [todosPersonagens, setTodosPersonagens] = useState([])
  // Página atual da listagem
  const [paginaAtual, setPaginaAtual] = useState(1)
  // Texto de pesquisa atual
  const [pesquisa, setPesquisa] = useState('')
  // Personagem em detalhe
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null)
  // Estado de carregamento
  const [loading, setLoading] = useState(false)
  // Mensagem de erro
  const [erro, setErro] = useState(null)
  // Controla se a página inicial está visível
  const [mostrarHome, setMostrarHome] = useState(true)
  // Ordenação selecionada (az / za)
  const [ordenacao, setOrdenacao] = useState('')

  // Carrega todos os personagens quando a aplicação inicia
  useEffect(() => {
    carregarTodos()
  }, [])

  // Carrega todos os personagens da API em paralelo
  // Usa pageSize=50 para reduzir o número de pedidos necessários
  async function carregarTodos() {
    setLoading(true)
    setErro(null)
    try {
      // Primeiro fetch para saber o total de páginas
      const primeira = await getCharacters(1, 50)
      const totalPaginas = primeira.info.totalPages
      const todasPaginas = [primeira.data]

      // Cria um array de promessas para as restantes páginas
      const promessas = []
      for (let i = 2; i <= totalPaginas; i++) {
        promessas.push(getCharacters(i, 50))
      }
      // Executa todos os pedidos em paralelo com Promise.all
      const resultados = await Promise.all(promessas)
      resultados.forEach(r => todasPaginas.push(r.data))

      // Junta todos os arrays de personagens numa só lista
      setTodosPersonagens(todasPaginas.flat())
    } catch {
      setErro('Erro ao carregar personagens. Tenta novamente.')
    } finally {
      setLoading(false)
    }
  }

  // Atualiza o texto de pesquisa e volta à primeira página
  async function handlePesquisar(texto) {
    setPesquisa(texto)
    setPaginaAtual(1)
  }

  // Carrega os detalhes de um personagem pelo seu ID
  async function handleVerDetalhes(id) {
    setLoading(true)
    setErro(null)
    try {
      const data = await getCharactersById(id)
      setPersonagemSelecionado(data.data)
    } catch {
      setErro('Erro ao carregar detalhes. Tenta novamente.')
    } finally {
      setLoading(false)
    }
  }

  // Limpa o personagem selecionado para voltar à listagem
  function handleVoltar() {
    setPersonagemSelecionado(null)
  }

  // Atualiza a página atual da paginação
  function handleMudarPagina(novaPagina) {
    setPaginaAtual(novaPagina)
  }

  // Aplica a pesquisa e a ordenação sobre a lista completa de personagens
  function getPersonagensFiltradas() {
    let lista = [...todosPersonagens]

    // Filtra pelo nome se houver texto de pesquisa
    if (pesquisa !== '') {
      lista = lista.filter(p =>
        p.name.toLowerCase().includes(pesquisa.toLowerCase())
      )
    }

    // Ordena alfabeticamente conforme a opção selecionada
    if (ordenacao === 'az') lista.sort((a, b) => a.name.localeCompare(b.name))
    if (ordenacao === 'za') lista.sort((a, b) => b.name.localeCompare(a.name))

    return lista
  }

  // Calcula a lista filtrada, o total de páginas e os personagens da página atual
  const listaFiltrada = getPersonagensFiltradas()
  const totalPaginas = Math.ceil(listaFiltrada.length / PAGE_SIZE)
  const personagensPagina = listaFiltrada.slice(
    (paginaAtual - 1) * PAGE_SIZE,
    paginaAtual * PAGE_SIZE
  )

  return (
    <div className="app">
      <Header />

      {/* Mostra a página inicial ou a listagem consoante o estado */}
      {mostrarHome ? (
        <Home onEntrar={() => setMostrarHome(false)} />
      ) : (
        <>
          {/* Estado de carregamento */}
          {loading && (
            <div className="text-center mt-5">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">A carregar...</span>
              </div>
              <p className="mt-3">A carregar...</p>
            </div>
          )}

          {/* Estado de erro */}
          {!loading && erro && (
            <div className="container mt-4">
              <div className="alert alert-danger text-center" role="alert">
                ⚠️ {erro}
              </div>
            </div>
          )}

          {/* Vista de detalhe de um personagem */}
          {!loading && !erro && personagemSelecionado && (
            <PersonagemDetalhe
              personagem={personagemSelecionado}
              onVoltar={handleVoltar}
            />
          )}

          {/* Listagem de personagens com pesquisa, ordenação e paginação */}
          {!loading && !erro && !personagemSelecionado && (
            <div className="container">
              <BarraPesquisa
                onPesquisar={handlePesquisar}
                onOrdenar={(v) => { setOrdenacao(v); setPaginaAtual(1) }}
              />

              {/* Mensagem quando não há resultados */}
              {personagensPagina.length === 0 && (
                <p className="text-center mt-5">Nenhum personagem encontrado.</p>
              )}

              {/* Grid de cards de personagens */}
              <div className="row g-3">
                {personagensPagina.map((personagem) => (
                  <div key={personagem._id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <PersonagemCard
                      personagem={personagem}
                      onVerDetalhes={handleVerDetalhes}
                    />
                  </div>
                ))}
              </div>

              {/* Paginação — só aparece se houver mais de uma página */}
              {totalPaginas > 1 && (
                <div className="mt-4">
                  <Paginacao
                    paginaAtual={paginaAtual}
                    totalPaginas={totalPaginas}
                    onMudarPagina={handleMudarPagina}
                  />
                </div>
              )}
            </div>
          )}

          {/* Botão para voltar à página inicial */}
          <div className="text-center mt-4 mb-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => { setMostrarHome(true); setPersonagemSelecionado(null) }}
            >
              ← Voltar ao Início
            </button>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}

export default App