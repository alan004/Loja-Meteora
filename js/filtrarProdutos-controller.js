import { clientService } from "./client-service.js"
import { exibirProdutos } from "./listarProdutos-controller.js"

const botoes = document.querySelectorAll('.categorias__card')

function filtrar() {
    botoes.forEach(e => e.addEventListener('click', filtrarCategoria))
}


export async function filtrarCategoria(){
        const categoriaBtn = this.innerText
        const produtosFiltrados = []
        const produtos = await clientService.listarProdutos()
        const categoriaSelecionada = categoriaBtn
        let produtosCategorias = produtos.filter(e=> e.categoria == categoriaSelecionada)
        produtosFiltrados.push(...produtosCategorias)
        exibirProdutos(produtosFiltrados)
}



filtrar()
