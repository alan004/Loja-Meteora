import { clientService } from "../client-service.js"
import { admExibirProdutos, tabelaProdutos } from "./listarProdutosAdm-controller.js"

//buscar produtos
const admPesquisar = document.querySelector('.menu__buscar.container_1')
admPesquisar.addEventListener('submit', admBuscarProduto)

export async function admBuscarProduto(){
        
        const barraPesquisa = document.querySelector('.menu__buscar.pesquisar')
        const conteudoPesquisado = barraPesquisa.value.toLowerCase()
        const produtos = await clientService.listarProdutos()
        const secaoProdutos = document.querySelector('.produtos')
        if (conteudoPesquisado === '' ){
            admExibirProdutos(produtos)
        }
        else if (conteudoPesquisado != ''){
            const produtosPesquisados = produtos.filter((produto) =>
            Object.values(produto).some((e) =>
                String(e).toLocaleLowerCase().includes(conteudoPesquisado)
            ))
            secaoProdutos.scrollIntoView({ behavior: 'smooth' })
            if (produtosPesquisados.length >= 1){
                limparMensagemErro()
                admExibirProdutos(produtosPesquisados)
            }
            else {
                mostrarMensagemErro(conteudoPesquisado)
                tabelaProdutos.innerHTML = ''
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


//filtrar os produtos
const botoes = document.querySelectorAll('.categorias__card')

function filtrar() {
    botoes.forEach(e => e.addEventListener('click', filtrarCategoria))
}


export async function filtrarCategoria(evento){
        evento.preventDefault()
        const secaoCategorias = document.querySelector('.categorias')
        const categoriaBtn = this.innerText
        const produtosFiltrados = []
        const produtos = await clientService.listarProdutos()
        const categoriaSelecionada = categoriaBtn
        let produtosCategorias = produtos.filter(e=> e.categoria == categoriaSelecionada)
        produtosFiltrados.push(...produtosCategorias)
        secaoCategorias.scrollIntoView({ behavior: 'smooth' })
        admExibirProdutos(produtosFiltrados)
}

filtrar()
