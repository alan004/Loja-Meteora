import { clientService } from "../client-service.js"

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
            <li><a href="./telas-admin/editar_produto.html?id=${id}" class="botao">Editar</a></li>
            <li><button class="botao deletar" type="button">Excluir</button></li>
        </ul>
    </td>
        
            `          
    linhaProduto.innerHTML = conteudoProduto
    linhaProduto.dataset.id = id
    return linhaProduto
}

export const tabelaProdutos = document.querySelector("[data-tabela]")

export function admExibirProdutos(produtos){
        tabelaProdutos.innerHTML = ''
        produtos.forEach(e => {
        const lojaVenda = e.loja.charAt(0).toUpperCase() + e.loja.slice(1)
        const novoProduto = criarNovoProduto(e.id, e.nome, e.descricao, e.preco, e.imgDesktop, lojaVenda, e.cores, e.tamanhos, e.categoria)
        tabelaProdutos.appendChild(novoProduto)
    })
}

tabelaProdutos.addEventListener('click', async (e) => {
    let botaoDeletar = e.target.className === 'botao deletar'

    if (botaoDeletar) {
        try {
            const linhaProdutoDeletado = e.target.closest('[data-id]')
            let id = linhaProdutoDeletado.dataset.id
            await clientService.deletarProdutos(id)
            linhaProdutoDeletado.remove()
        }
        catch (erro) {
            console.log(erro)
        }
    }
})
