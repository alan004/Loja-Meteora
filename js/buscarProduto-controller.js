import { clientService } from "./client-service.js"
import { exibirProdutos } from "./listarProdutos-controller.js"

const pesquisar = document.querySelector('.menu__buscar.container_1')
pesquisar.addEventListener('submit', buscarProduto)

export async function buscarProduto(){
        const barraPesquisa = document.querySelector('.menu__buscar.pesquisar')
        const conteudoPesquisado = barraPesquisa.value.toLowerCase()
        const produtos = await clientService.listarProdutos()
        if (conteudoPesquisado === '' ){
            exibirProdutos(produtos)
        }
        else if (conteudoPesquisado != ''){
            const produtosPesquisados = produtos.filter((produto) =>
            Object.values(produto).some((e) =>
                String(e).toLocaleLowerCase().includes(conteudoPesquisado)
            ))
            if (produtosPesquisados.length >= 1){
                exibirProdutos(produtosPesquisados)
            }
            else {
                console.log("nao")
            }
        }        
}
