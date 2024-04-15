let funcionarios = []

function enviarLista(event) {
    event.preventDefault()

    let nome = document.getElementById("inputNome").value
    let tamanho = document.getElementById("inputEspaco").value
    let espacoDeUso = { nome: nome, tamanho: tamanho }

    funcionarios.push(espacoDeUso)

    document.getElementById("inputNome").value = ""
    document.getElementById("inputEspaco").value = "1"

    atualizarLista()
}

function atualizarLista() {

    funcionarios.sort(function (a, b) {
        return a.tamanho - b.tamanho
    })

    $("#listaFuncionarios").empty();

    for (let i = 0; i < funcionarios.length; i++) {
        let card = '<div class="card">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title">' + nome[i].funcionarios + '</h5>';
        card += '<p class="card-text">Espaço: ' + funcionarios[i].tamanho + '</p>';
        card += '</div>';
        card += '</div>';

        $("#listaFuncionarios").append(card);
    }
}

$("#formFuncionarios").submit(enviarLista);