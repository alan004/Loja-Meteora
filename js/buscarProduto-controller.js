import { clientService } from "./client-service.js"
import { exibirProdutos, gradeProdutos } from "./listarProdutos-controller.js"

const pesquisar = document.querySelector('.menu__buscar.container_1')
pesquisar.addEventListener('submit', buscarProduto)

export async function buscarProduto(){
        const barraPesquisa = document.querySelector('.menu__buscar.pesquisar')
        const conteudoPesquisado = barraPesquisa.value.toLowerCase()
        const produtos = await clientService.listarProdutos()
        const secaoProdutos = document.querySelector('.produtos')

        if (conteudoPesquisado === '' ){
            exibirProdutos(produtos)
        }
        else if (conteudoPesquisado != ''){
            const produtosPesquisados = produtos.filter((produto) =>
            Object.values(produto).some((e) =>
                String(e).toLocaleLowerCase().includes(conteudoPesquisado)
            ))
            secaoProdutos.scrollIntoView({ behavior: 'smooth' })
            if (produtosPesquisados.length >= 1){
                limparMensagemErro()
                exibirProdutos(produtosPesquisados)
            }
            else {
                mostrarMensagemErro(conteudoPesquisado)
                gradeProdutos.innerHTML = ''
            }
        }        
}


function limparMensagemErro(){
    const paragrafo = document.querySelector('.produtos').querySelector('.conteudo__titulos')
    paragrafo.innerText = 'Produtos que estão bombando!'
}

function mostrarMensagemErro(termo){
    const busca = termo
    const mensagem = 'Desculpe, sua busca por "' + busca + '" não encontrou nenhum resultado :('
    const paragrafo = document.querySelector('.produtos').querySelector('.conteudo__titulos') 
    paragrafo.innerText = mensagem
}
