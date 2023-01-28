
console.log('mostrar o document', document);

const botaoTraielr = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener("click", function () {
        modal.classList.add("aberto");
    });

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
});


