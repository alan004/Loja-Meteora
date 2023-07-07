import { clientService } from "./client-service.js";
import { exibirModalProduto} from "./modal.js";

function obterCoresTamanhos (cores, tamanhos) {
    let coresProduto = ""
    let tamanhosProduto = ""

    for (let index = 0; index < tamanhos.length; index++) {
        const item = tamanhos[index]
        tamanhosProduto += `<div class="produtos__tipo--item--selecao"><label for="${item}">${item}</label><input name="tamanho" id="${item}" type="radio"></div>`
        }

    for (let index = 0; index < cores.length; index++) {
        const item = cores[index]
        coresProduto += `<div class="produtos__tipo--item--selecao"><label for="${item}">${item}</label><input name="cor" id="${item}" type="radio"></div>`
        }
    return { coresProduto, tamanhosProduto }
}

const criarNovoProduto = (id, nome, descricao, preco, imgMobile, imgTablet, imgDesktop, loja, cores, tamanhos) => {
    const cardProduto = document.createElement('div')
    cardProduto.classList.add("produtos__card")
    const conteudoProduto = `
        <img src="${imgMobile}" alt="" class="produto__card__foto">
        <img src="${imgTablet}"" alt="" class="produto__card__foto">
        <img src="${imgDesktop}"" alt="" class="produto__card__foto">
        <div class="produtos__card__detalhes">
            <p class="produto__card__detalhes--nome">${nome}</p>
            <p class="produto__card__detalhes--descricao">${descricao}</p>
            <p class="produto__card__detalhes--preco">${preco}</p>
            <button class="produto__card__detalhes botao open--produto">Ver mais</button>
            `          
    const { coresProduto, tamanhosProduto } = obterCoresTamanhos(cores, tamanhos)
    const conteudoModal = `
    <dialog class="modal--produto">
    <div class="modal__cabecalho">
    <p class="modal__titulo">Confira detalhes sobre o produto</p>
    <button class="modal__botao close--produto"></button>
    </div>
<div class="modal__descricao produto">
    <figure class="produto__modal--foto">
        <img src="${imgMobile}" alt="" class="">
        <img src="${imgTablet}" alt="" class="">
        <img src="${imgDesktop}" alt="" class="">
    </figure>
    <div class="produtos__card__detalhes produtos__modal">
        <p class="produto__card__detalhes--nome">${nome}</p>
        <p class="produto__card__detalhes--descricao">${descricao}</p>
        <hr class="separador">
        <p class="produto__card__detalhes--preco">${preco}</p>   
        <form action="" class="produtos__tipo">
            <p class="produto__card__detalhes--entrega">Vendido e entregue por ${loja}</p>
            <hr class="separador">
            <p>Cores:</p>
            <div class="produtos__tipo--item cores">
            ${coresProduto}
            </div>
            <hr class="separador">
            <p>Tamanho:</p>
            <div class="produtos__tipo--item tamanho">
            ${tamanhosProduto}
            </div>
            <a class="botao produtos__btn--sacola">Adicionar à sacola</a>
                </form>
                </div>
            </div>
        </dialog>
        </div>`
    cardProduto.innerHTML = conteudoProduto + conteudoModal
    cardProduto.dataset.id = id
    return cardProduto
}

const gradeProdutos = document.querySelector(".produtos__grade")

export const renderProdutos = async () => {
    try {
        const listarProdutos = await clientService.listarProdutos()
        listarProdutos.forEach(e => {
        const lojaVenda = e.loja.charAt(0).toUpperCase() + e.loja.slice(1)
        const novoProduto = criarNovoProduto(e.id, e.nome, e.descricao, e.preco, e.imgMobile, e.imgTablet, e.imgDesktop, lojaVenda, e.cores, e.tamanhos)
        gradeProdutos.appendChild(novoProduto)
        exibirModalProduto(novoProduto)
        })}
    catch(erro){
        console.log(erro)
    }
}
