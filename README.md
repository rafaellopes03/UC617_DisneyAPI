# ✨ Personagens da Disney

Aplicação web desenvolvida com **React + Vite** que permite explorar o universo de personagens da Disney. O utilizador pode pesquisar personagens por nome, ordenar alfabeticamente e consultar os detalhes de cada personagem, incluindo os filmes, séries e videojogos em que participou.

---

## 🌐 Demo

> Link do site publicado: https://uc-617-disney-api.vercel.app/

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) — biblioteca para construção de interfaces
- [Vite](https://vitejs.dev/) — ferramenta de desenvolvimento e bundling
- [Bootstrap 5](https://getbootstrap.com/) — framework CSS para responsividade e componentes visuais
- [Disney API](https://disneyapi.dev/) — API pública para obtenção dos dados

---

## 📡 Sobre a API

A **Disney API** é uma API pública e gratuita disponível em [disneyapi.dev](https://disneyapi.dev/). Não requer autenticação e disponibiliza dados sobre centenas de personagens da Disney, incluindo nome, imagem, filmes, séries de televisão e videojogos.

Endpoints utilizados:

|Método|Endpoint|Descrição|
|---|---|---|
|GET|`/character?page={p}&pageSize={n}`|Lista paginada de personagens|
|GET|`/character/{id}`|Detalhes de um personagem por ID|

---

## ⚙️ Funcionalidades

- Página inicial com descrição da aplicação e da API
- Carregamento de todos os personagens da API
- Pesquisa de personagens por nome (local, sem chamadas extra à API)
- Ordenação alfabética A→Z e Z→A
- Paginação da listagem (12 personagens por página)
- Página de detalhe com filmes, séries e videojogos de cada personagem
- Tratamento de estados de carregamento e erro
- Interface responsiva com Bootstrap

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes reutilizáveis
│   ├── BarraPesquisa.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Paginacao.jsx
│   ├── PersonagemCard.jsx
│   └── PersonagemDetalhe.jsx
├── pages/               # Páginas da aplicação
│   └── Home.jsx
├── services/            # Comunicação com a API
│   └── disneyAPI.js
├── App.jsx              # Componente principal
├── index.css            # Estilos globais
└── main.jsx             # Ponto de entrada da aplicação
```

---

## 🚀 Instalação e Execução

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado na máquina.

```bash
# 1. Clonar o repositório
git clone https://github.com/utilizador/nome-do-repositorio.git

# 2. Entrar na pasta do projeto
cd nome-do-repositorio

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

---

## 👤 Autor

Realizado por **Rafael Lopes**  
ATEC - 2026
