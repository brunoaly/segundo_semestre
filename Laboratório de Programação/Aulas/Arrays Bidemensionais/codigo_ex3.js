function insert() {

    let tabela = document.getElementById('tabela')
    let ra = document.getElementById('ra').value
    let nome = document.getElementById('nome').value
    let prova1 = document.getElementById('prova1').value
    let prova2 = document.getElementById('prova2').value
    let trab = document.getElementById('trab').value
    let media = prova1 * 0.3 + prova2 * 0.5 + trab * 0.2
    let situacao

    if (media >= 7) {
        situacao = 'APROVADO'
    } else {
        situacao = 'REPROVADO'
    }

    let linha = tabela.insertRow(-1)
    let celulaRA = linha.insertCell(0)
    let celNome = linha.insertCell(1)
    let celP1 = linha.insertCell(2)
    let celP2 = linha.insertCell(3)
    let celTrab = linha.insertCell(4)
    let celMedia = linha.insertCell(5)
    let celSituacao = linha.insertCell(6)

    celulaRA.innerHTML = ra
    celNome.innerHTML = nome
    celP1.innerHTML = prova1
    celP2.innerHTML = prova2
    celTrab.innerHTML = trab
    celMedia.innerHTML = media
    celSituacao.innerHTML = situacao
}


// PROVA 1 PROVA 2 TRABALHO MEDIA SITUAÇÃO APROVADO RE REPROVADO