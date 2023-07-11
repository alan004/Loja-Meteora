import { swiper } from "./slider.js";
import { clientService } from "./client-service.js";
import { exibirProdutos } from "./listarProdutos-controller.js";
import { cadastrarEmailNewsletter } from "./newsletter-controller.js";
import { filtrarCategoria } from "./filtrarProdutos-controller.js";



cadastrarEmailNewsletter()
renderProdutos()

export async function renderProdutos(){
    try {
        const produtos = await clientService.listarProdutos()
        exibirProdutos(produtos)
    }
    catch(erro){
        console.log(erro)
    }
}

