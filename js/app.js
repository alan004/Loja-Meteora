import { swiper } from "./slider.js";
import { clientService } from "./client-service.js";
import { exibirProdutos } from "./listarProdutos-controller.js";
import { cadastrarEmailNewsletter } from "./newsletter-controller.js";
import { filtrarCategoria } from "./filtrarProdutos-controller.js";
import { buscarProduto } from "./buscarProduto-controller.js";



cadastrarEmailNewsletter()
renderProdutos()

const btnHome = document.getElementById('home')
btnHome.addEventListener('click', async () => {
    const produtos = await clientService.listarProdutos()
    exibirProdutos(produtos)
})


export async function renderProdutos(){
    try {
        const produtos = await clientService.listarProdutos()
        exibirProdutos(produtos)
    }
    catch(erro){
        console.log(erro)
    }
}

