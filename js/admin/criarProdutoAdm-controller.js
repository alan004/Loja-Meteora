import { clientService } from "../client-service.js";

async function criarProduto(){
    const inputNome = document.querySelector('[data-nome]')
    const inputDescricao = document.querySelector('[data-descricao]')
    const inputPreco = document.querySelector('[data-preco]')
    const inputTamanhos = document.querySelector('[data-tamanhos]')
    const inputCores = document.querySelector('[data-cores]')
    const inputLoja = document.querySelector('[data-loja]')
    const inputCategoria = document.querySelector('[data-categoria]')
    const inputImagem = document.querySelector('[data-imagem]')

    const formulario = document.querySelector('.formulario__produto')
    formulario.addEventListener('submit', async(e) => {
        e.preventDefault
        try{
            const tamanhos = inputTamanhos.value.split(',').map((item) => item.trim())
            const cores = inputCores.value.split(',').map((item) => item.trim())
        await clientService.criarProduto(inputNome.value, inputDescricao.value, inputPreco.value, tamanhos, cores, inputLoja.value, inputCategoria.value, inputImagem.value)
    }
    catch(erro){
        console.log(erro)
    } 
    })
    
}

criarProduto()