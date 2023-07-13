import { clientService } from "../client-service.js"
import { exibirModalProduto} from "../modal.js"

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

const criarNovoProduto = (id, nome, descricao, preco, imgDesktop, loja, cores, tamanhos, categoria) => {
    const linhaProduto = document.createElement('tr')
    linhaProduto.classList.add("produtos__lista")
    const conteudoProduto = `
    <td class="td" data-td>${nome}</td>
    <td>${preco}</td>
    <td>${tamanhos}</td>
    <td>${cores}</td>
    <td>${loja}</td>
    <td>${categoria}</td>
    <td><img src="${imgDesktop}"></td>
    <td>${descricao}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
        
            `          
    linhaProduto.innerHTML = conteudoProduto
    linhaProduto.dataset.id = id
    return linhaProduto
}

export const gradeProdutos = document.querySelector(".tabela")

export function exibirProdutos(produtos){
        produtos.forEach(e => {
        const lojaVenda = e.loja.charAt(0).toUpperCase() + e.loja.slice(1)
        const novoProduto = criarNovoProduto(e.id, e.nome, e.descricao, e.preco, e.imgDesktop, lojaVenda, e.cores, e.tamanhos, e.categoria)
        gradeProdutos.appendChild(novoProduto)
    })
}
