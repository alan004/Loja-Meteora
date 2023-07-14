import { clientService } from "../client-service.js";
import { admExibirProdutos } from "./listarProdutosAdm-controller.js";
import { admBuscarProduto } from "./admBuscarFiltrarProdutos-controller.js";

renderProdutosCadastrados()

const btnHome = document.getElementById('home')
btnHome.addEventListener('click', async () => {
    const produtos = await clientService.listarProdutos()
    admExibirProdutos(produtos)
})


export async function renderProdutosCadastrados(){
    try {
        const produtos = await clientService.listarProdutos()
        admExibirProdutos(produtos)
    }
    catch(erro){
        console.log(erro)
    }
}

