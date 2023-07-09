export function exibirModalProduto(produto){
    const modalProduto = produto.querySelector(".modal--produto")
    const openModalBtnProduto = produto.querySelector(".open--produto")
    const closeModalBtnProduto = produto.querySelector(".close--produto")
    openModalBtnProduto.addEventListener("click", () => modalProduto.showModal())
    closeModalBtnProduto.addEventListener("click", () => modalProduto.close())
}