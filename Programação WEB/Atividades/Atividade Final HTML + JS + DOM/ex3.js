function calcularConvidados() {
    let pontuacaoMinima = Number(document.getElementById("pontuacaoMinima").value)
    let pontosProva1 = []
    let pontosProva2 = []

    for (let i = 1; i <= 8; i++) {
        let pontoProva1 = Number(document.getElementById("pontosProva1-" + i).value)
        let pontoProva2 = Number(document.getElementById("pontosProva2-" + i).value)

        if (pontoProva1 < 0 || pontoProva1 > 100 || pontoProva2 < 0 || pontoProva2 > 100) {
            alert("Verifique os valores")
            return
        }

        pontosProva1.push(pontoProva1)
        pontosProva2.push(pontoProva2)
    }

    let competidoresConvidados = 0

    for (let j = 0; j < pontosProva1.length; j++) {
        let pontosTotal = pontosProva1[j] + pontosProva2[j];
        if (pontosTotal >= pontuacaoMinima) {
            competidoresConvidados++
        }
    }

    document.getElementById("resultado").innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="rafa.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Competidores convidados: ${competidoresConvidados}</p>
    </div>
    </div>
    `
}
