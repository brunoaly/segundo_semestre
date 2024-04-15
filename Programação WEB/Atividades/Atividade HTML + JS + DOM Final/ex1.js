document.getElementById('frm').addEventListener('submit', function (event) {
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let descricao = document.getElementById('descricao').value
    let produtora = document.getElementById('produtora').value
    let ano = document.getElementById('ano').value
    let idade = document.getElementById('idade').value

    if (nome === '' || descricao === '' || produtora === '' || isNaN(ano) || isNaN(idade)) {
        alert('Preencha todos os campos.')
        return
    }

    let jogo = {
        nome: nome,
        descricao: descricao,
        produtora: produtora,
        ano: Number(ano),
        idade: Number(idade)
    }

    enviarJogo(jogo)
})

function enviarJogo(jogo) {
    let url = 'https://academico.espm.br/testeapi/jogo/criar'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
    })
        .then(function (response) {
            if (response.ok) {
                alert('Jogo cadastrado com sucesso.')
                
            } else {
                alert('Ocorreu um erro ao criar o jogo.')
            }
        })
        .catch(function (error) {
            alert('Ocorreu um erro ao criar o jogo.')
            console.log(error)
        })
}