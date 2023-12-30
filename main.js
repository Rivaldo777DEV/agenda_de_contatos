const form = document.getElementById(`Contato`);

let linhas = ``;

form.addEventListener(`submit`, function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeLista = document.getElementById(`nome-lista`);
    const inputTelefoneLista = document.getElementById(`telefone-lista`);



    let linha = `<tr>`;
    linha += `<td>${inputNomeLista.value}</td>`;
    linha += `<td>${inputTelefoneLista.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

inputNomeLista.value = ``;
inputTelefoneLista.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

