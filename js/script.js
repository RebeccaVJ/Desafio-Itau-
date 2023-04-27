import cnpjConfirmado from "./confere-cnpj.js";
const camposFormulario = document.querySelectorAll('[required]')

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const tabelaRespostas = {
//         "cnpj": e.target.elements["cnpj"].value,
//         "razao social": e.target.elements["razao social"].value,
//         "cpf representante legal": e.target.elements["cpf representante legal"].value,
//         "nome do representante legal": e.target.elements["nome do representante legal?"].value,
//         "como deseja ser chamado?": e.target.elements["como deseja ser chamado?"].value,
//         "quantidade de funcionarios": e.target.elements["quantidade de funcionarios"].value,
//         "faturamento anual": e.target.elements["faturamento anual"].value,
//     }

//     localStorage.setItem("cadastro", JSON.stringify(tabelaRespostas));

//     window.location.href = "./confere.html";
// })

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificandoCampos(campo));
})

function verificandoCampos(campo) {
    if (campo.name == "cnpj" && campo.value.length >= 14 ) {
        cnpjConfirmado(campo);
    }
}