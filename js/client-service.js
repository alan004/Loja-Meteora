const enderecoAPI = 'http://localhost:3000/'

const listarProdutos = () => {
    return fetch(enderecoAPI + `Produtos`)
    .then (e => {
        if(e.ok){
            const produtos = e.json()
            return produtos
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const adicionarEmail = (email) =>{
    return fetch(enderecoAPI + `EmailsLista`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {email: email}
        )})
        .then((e) => {
            if(e.ok){
                return e.body
            }
            throw new Error ('Não foi possível cadastrar o email')
        })
}

export const clientService = {
    listarProdutos,
    adicionarEmail
}