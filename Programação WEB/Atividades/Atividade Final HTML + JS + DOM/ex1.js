document.getElementById('frm').addEventListener('submit', async function (event) {
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let descricao = document.getElementById('descricao').value
    let produtora = document.getElementById('produtora').value
    let ano = parseInt(document.getElementById('ano').value)
    let idade = parseInt(document.getElementById('idade').value)

    if (nome === '' || descricao === '' || produtora === '' || isNaN(ano) || isNaN(idade)) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao criar o jogo!',
            text: 'Verifique os campos preenchidos.',
            footer: '<a href="">Porque estou com esse problema?</a>'
        })
        return
    }

    let jogo = {
        nome: nome,
        descricao: descricao,
        produtora: produtora,
        ano: parseFloat(ano),
        idadeMinima: parseFloat(idade)
    }

    try {
        let response = await fetch('https://academico.espm.br/testeapi/jogo/criar', {
            method: 'POST',
            body: JSON.stringify(jogo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            Swal.fire(
                'Tudo certo!',
                'O jogo foi criado com sucesso!',
                'success'
            )
            document.getElementById('frm').reset()
        } else {
            let erro = await response.text();
            Swal.fire({
                icon: 'error',
                title: 'Erro ao criar o jogo!',
                text: 'Erro na criação do jogo: ' + erro,
                footer: '<a href="">Porque estou com esse problema?</a>'
            })
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao criar o jogo!',
            text: 'Erro na criação do jogo: ' + error.message,
            footer: '<a href="">Porque estou com esse problema?</a>'
        })
    }
})