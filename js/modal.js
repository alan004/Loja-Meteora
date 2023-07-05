const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open");
const closeModalBtn = document.querySelector(".close");
openModalBtn.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());

export function exibirModalProduto(produto){
    const modalProduto = produto.querySelector(".modal--produto");
    const openModalBtnProduto = produto.querySelector(".open--produto");
    const closeModalBtnProduto = produto.querySelector(".close--produto");
    openModalBtnProduto.addEventListener("click", () => modalProduto.showModal());
    closeModalBtnProduto.addEventListener("click", () => modalProduto.close());   
}