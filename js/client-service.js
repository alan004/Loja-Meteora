const listarProdutos = () => {
    return fetch(`http://localhost:3000/Produtos`)
    .then (e => {
        if(e.ok){
            return e.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const adicionarEmail = (email) =>{
    return fetch(`http://localhost:3000/EmailsLista`,{
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