const listarProdutos = () => {
    return fetch(`http://localhost:3000/Produtos`)
    .then (e => {
        if(e.ok){
            return e.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

export const clientService = {
    listarProdutos
}