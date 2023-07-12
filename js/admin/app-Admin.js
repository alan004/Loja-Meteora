import { clientService } from "../client-service.js";
import { exibirProdutos } from "./listarProdutosAdm-controller.js";
// import { filtrarCategoria } from "../filtrarProdutos-controller.js";
// import { buscarProduto } from "../produtos/buscarProduto-controller.js";

renderProdutosCadastrados()

const btnHome = document.getElementById('home')
btnHome.addEventListener('click', async () => {
    const produtos = await clientService.listarProdutos()
    exibirProdutos(produtos)
})


export async function renderProdutosCadastrados(){
    try {
        const produtos = await clientService.listarProdutos()
        exibirProdutos(produtos)
    }
    catch(erro){
        console.log(erro)
    }
}

