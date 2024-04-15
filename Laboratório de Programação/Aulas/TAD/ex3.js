let lista = []
let valor, quantidade

class Acao {

    constructor(valor, quantidade) {

        this.valor = valor

        this.quantidade = quantidade

    }
}

function comprar() {

    quantidade = document.getElementById("inputQnt").value

    valor = parseFloat(document.getElementById("inputValor").value)

    lista.push(new Acao(quantidade, valor))
}

function vender() {

    let acaoAntiga
    let lucro = 0
    let i = 0
    let qntVendida

    quantidade = document.getElementById("inputQnt").value

    valor = parseFloat(document.getElementById("inputValor").value)

    while (quantidade > 0 && lista.length > 0) {

        acaoAntiga = lista[i]

        qntVendida = Math.min(quantidade, acaoAntiga.quantidade)

        lucro += (valor - acaoAntiga.valor) * qntVendida

        lista[i].quantidade -= qntVendida

        if (lista[i].quantidade == 0) {

            lista[i].shift()
        }
        i++
        document.getElementById("mensagem").innerHTML = "Lucro R$: " + lucro
    }
}