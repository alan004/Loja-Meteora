import { clientService } from "../client-service.js";

async function exibirProduto() {
    const id =  new URL(window.location).searchParams.get('id')
    console.log(id)
    const inputNome = document.querySelector('[data-nome]')
    const inputDescricao = document.querySelector('[data-descricao]')
    const inputPreco = document.querySelector('[data-preco]')
    const inputTamanhos = document.querySelector('[data-tamanhos]')
    const inputCores = document.querySelector('[data-cores]')
    const inputLoja = document.querySelector('[data-loja]')
    const inputCategoria = document.querySelector('[data-categoria]')
    const inputImagem = document.querySelector('[data-imagem]')

    try{
        const dados = await clientService.detalharProduto(id)
        inputNome.value = dados.nome
        inputDescricao.value = dados.descricao
        inputPreco.value = dados.preco
        inputTamanhos.value = dados.tamanhos
        inputCores.value = dados.cores
        inputLoja.value = dados.loja
        inputCategoria.value = dados.categoria
        inputImagem.value = dados.imgDesktop
    }

    catch(erro){
        console.log(erro)
    }

    const formulario = document.querySelector('.formulario__produto')
    formulario.addEventListener('submit', async(e)=>{
        e.preventDefault()
        try {
            const tamanhos = inputTamanhos.value.split(',').map((item) => item.trim())
            const cores = inputCores.value.split(',').map((item) => item.trim())
            await clientService.editarProduto(id, inputNome.value, inputDescricao.value, inputPreco.value, tamanhos, cores, inputLoja.value, inputCategoria.value, inputImagem.value)
            window.location.href = "../admin.html"
        } 
        catch(erro){
            console.log(erro)
    }

})
}


exibirProduto()