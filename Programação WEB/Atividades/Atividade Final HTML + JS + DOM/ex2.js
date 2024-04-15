function listarJogos() {
  fetch('https://academico.espm.br/testeapi/jogo/listar')
    .then(response => response.json())
    .then(jogos => exibirJogos(jogos))
    .catch(error => console.error('Erro ao buscar jogos:', error))
}

function exibirJogos(jogos) {
  let pre = document.querySelector('.pre')

  jogos.forEach(jogo => {
    let card = document.createElement('div')
    card.classList.add('card')

    let conteudo = `
        <div class="card-body">
          <h5 class="card-title">${jogo.nome}:</h5>
          <p class="card-text"><span class="s1">Descrição:</span> ${jogo.descricao}</p>
          <p class="card-text"><span class="s1">Produtora:</span> ${jogo.produtora}</p>
          <p class="card-text"><span class="s1">Ano:</span> ${jogo.ano}</p>
          <p class="card-text"><span class="s1">Idade mínima:</span> ${jogo.idadeMinima}</p>
        </div>
      `

    card.innerHTML = conteudo

    pre.appendChild(card)
  })
}

listarJogos()
