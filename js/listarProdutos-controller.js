import { clientService } from "./client-service.js";
import { exibirModalProduto} from "./modal.js";

const criarNovoProduto = (id, nome, descricao, preco, imgMobile, imgTablet, imgDesktop, loja) => {
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
            

    const conteudoModal = `
    <dialog id="modal--produto" class"modal--produto">
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
            <div class="produtos__tipo--item">
            <div class="produtos__tipo--item--selecao"><label for="amarela">Amarela</label><input name="cor" id="amartela" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="azul">Azul</label><input name="cor" id="azul" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="preta">Preta</label><input name="cor" id="preta" type="radio"></div>
            </div>
            <hr class="separador">
            <p>Tamanho:</p>
            <div class="produtos__tipo--item">
            <div class="produtos__tipo--item--selecao"><label for="pp">PP</label><input name="tamanho" id="pp" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="p">P</label><input name="tamanho" id="p" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="m">M</label><input name="tamanho" id="m" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="g">G</label><input name="tamanho" id="g" type="radio"></div>
            <div class="produtos__tipo--item--selecao"><label for="gg">GG</label><input name="tamanho" id="gg" type="radio"></div>
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
        const novoProduto = criarNovoProduto(e.id, e.nome, e.descricao, e.preco, e.imgMobile, e.imgTablet, e.imgDesktop, e.loja)
        gradeProdutos.appendChild(novoProduto)    
        exibirModalProduto(novoProduto)
        })}
    catch(erro){
        console.log("erro")
    }
}
