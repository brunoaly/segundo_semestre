function calcular() {
    let dataVencimento = document.getElementById("dt_vencimento").value
    let valorConta = Number(document.getElementById("valor_conta").value)

    let hoje = new Date()
    let vencimento = new Date()

    let aux = dataVencimento.split("-")
    vencimento.setDate(Number(aux[2]))
    vencimento.setMonth(Number(aux[1]-1))
    vencimento.setFullYear(Number(aux[0]))

    let juros = 0, multa = 0, total
    let dias = (hoje - vencimento) / 86400000

    if (dias > 0) {
        multa = valorConta * 2 / 100
        juros = valorConta * 0.33 / 100 * dias

    }

    total = valorConta + multa + juros

    document.getElementById("valor_multa").value = multa.toFixed(2)
    document.getElementById("valor_juros").value = juros.toFixed(2)
    document.getElementById("valor_total").value = total.toFixed(2)
}