const enderecoAPI = 'https://my-json-server.typicode.com/alan004/loja-meteora/'

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

const deletarProdutos = (id) => {
    return fetch(enderecoAPI + `Produtos/${id}`, {
        method: 'DELETE',
    }) .then(e => {
        if(!e.ok) {
            throw new Error('Nao foi possivel excluir o produto')
        }
    })
}

const criarProduto = (nome, descricao, preco, tamanhos, cores, loja, categoria,img) => {
  return fetch(enderecoAPI + `Produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
             nome:nome,
             descricao:descricao,
             preco:preco,
             tamanhos:tamanhos,
             cores:cores,
             loja:loja,
             categoria:categoria,
             imgDesktop:img }),
  }).then((e) => {
    if (e.ok) {
      return e.body;
    }
    throw new Error("Não foi possível cadastrar o email");
  });
};

const detalharProduto = (id)=> {
    return fetch(enderecoAPI + `Produtos/${id}`)
    .then(resposta =>{
        if(resposta.ok){
        return resposta.json()
        }
        throw new Error('Nao foi possível detalhar o cliente')
    })
}

const editarProduto = (id, nome, descricao, preco, tamanhos, cores, loja, categoria,img) =>{
    return fetch(enderecoAPI + `Produtos/${id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {nome:nome,
             descricao:descricao,
             preco:preco,
             tamanhos:tamanhos,
             cores:cores,
             loja:loja,
             categoria:categoria,
             imgDesktop:img
            }
        )})
        .then((e) => {
            if(e.ok){
                return e.body
            }
            throw new Error ('Não foi possível editar o email')
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
    adicionarEmail,
    criarProduto,
    deletarProdutos,
    detalharProduto,
    editarProduto
}