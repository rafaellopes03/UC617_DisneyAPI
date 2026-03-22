// URL base da Disney API
const API_URL = "https://api.disneyapi.dev"

// Obtém uma lista paginada de personagens
// page — número da página (por defeito 1)
// pageSize — quantidade de personagens por página (por defeito 12)
export async function getCharacters(page = 1, pageSize = 12) {
    const response = await fetch(`${API_URL}/character?page=${page}&pageSize=${pageSize}`)
    const data = await response.json()
    return data
}

// Pesquisa personagens pelo nome
// encodeURIComponent converte espaços e caracteres especiais para o formato do URL
export async function searchCharacters(name) {
    // encodeURIComponent() — converte espaços e caracteres especiais para o formato do URL
    const response = await fetch (`${API_URL}/character?name=${encodeURIComponent(name)}`)
    const data = await response.json()
    return data
}

// Obtém os detalhes de um personagem pelo seu ID
export async function getCharactersById(id) {
    const response = await fetch (`${API_URL}/character/${id}`)
    const data = await response.json()
    return data
}