import { clientService } from "./client-service.js"

export function cadastrarEmailNewsletter(){
    const modal = document.querySelector(".modal")
    const openModalBtn = document.querySelector(".open")
    const closeModalBtn = document.querySelector(".close");
    openModalBtn.addEventListener("click", (e) =>{ 
    e.preventDefault()
    modal.showModal()}
)
    closeModalBtn.addEventListener("click", async () => {
        modal.close();
        const formularioNewsletter = document.querySelector('[data-newsletter]')
        const email = formularioNewsletter.querySelector(".newsletter__cadastro--email").value
            try {
                await clientService.adicionarEmail(email)
            } catch (erro) {
                console.log(erro)
            }
})
}
