const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open");
const closeModalBtn = document.querySelector(".close");

const modalProduto = document.querySelector(".modal--produto");
const openModalBtnProduto = document.querySelector(".open--produto");
const closeModalBtnProduto = document.querySelector(".close--produto");


openModalBtn.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());
openModalBtnProduto.addEventListener("click", () => modalProduto.showModal());
closeModalBtnProduto.addEventListener("click", () => modalProduto.close());
