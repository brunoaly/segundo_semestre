let form = document.getElementById('frm')
let pre = document.getElementById('pre')

class Paciente {
    constructor(cpf, nome, peso, altura, idade, quadril) {
        this.cpf = cpf
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.idade = idade
        this.quadril = quadril
    }

    calcularFCardiacaMaxima() {
        return 220 - this.idade
    }

    calcularFCardiacaAlvo() {
        let freqMaxima = this.calcularFCardiacaMaxima()
        return [freqMaxima * 0.5, freqMaxima * 0.85]
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2)
    }

    calcularBAI() {
        return (this.quadril / (this.altura * Math.sqrt(this.altura))) - 18
    }
}

let pacientes = []

function cadastrarPaciente() {
    let cpf = document.getElementById('cpf').value
    let nome = document.getElementById('nome').value
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let idade = parseInt(document.getElementById('idade').value)
    let quadril = parseFloat(document.getElementById('quadril').value)

    if (cpf === "" || nome === "" || isNaN(peso) || isNaN(altura) || isNaN(idade) || isNaN(quadril)) {
        alert("Verifique os campos preenchidos")
        return
    }

    for (let paciente of pacientes) {
        if (paciente.cpf === cpf) {
            alert("CPF existente. Verifique os dados informados.")
            return
        }

    }

    let paciente = new Paciente(cpf, nome, peso, altura, idade, quadril)

    pacientes.push(paciente)

    alert("Paciente cadastrado com sucesso!")

    form.reset()
}


function pesquisarPaciente() {
    let cpf = document.getElementById('cpfPesquisa').value
    let pacienteCC = null

    for (let paciente of pacientes) {
        if (paciente.cpf === cpf) {
            pacienteCC = paciente
            break
        }
    }

    if (pacienteCC) {
        let imc = pacienteCC.calcularIMC()
        let frequenciaMaxima = pacienteCC.calcularFCardiacaMaxima()
        let frequenciaAlvo = pacienteCC.calcularFCardiacaAlvo()
        let bai = pacienteCC.calcularBAI()

        pre.innerHTML = 
            `
            Nome: ${pacienteCC.nome}
            CPF: ${pacienteCC.cpf}
            IMC: ${imc}
            Frequência Cardíaca Máxima: ${frequenciaMaxima}
            Frequência Cardíaca Alvo: ${frequenciaAlvo[0]} - ${frequenciaAlvo[1]}
            BAI: ${bai}
            `

    } else {
        
        pre.innerHTML = "Paciente não encontrado."
    }
}

function listarPacientes() {

    let informacoes = ""

    for (let paciente of pacientes) {
        let imc = paciente.calcularIMC()
        let frequenciaMaxima = paciente.calcularFCardiacaMaxima()
        let frequenciaAlvo = paciente.calcularFCardiacaAlvo()
        let bai = paciente.calcularBAI()

        informacoes += 
        `
        Nome: ${paciente.nome}
        CPF: ${paciente.cpf}
        IMC: ${imc}
        Frequência Cardíaca Máxima: ${frequenciaMaxima}
        Frequência Cardíaca Alvo: ${frequenciaAlvo[0]} - ${frequenciaAlvo[1]}
        BAI: ${bai}\n\n
        `
    }

    if (informacoes === "") {
        pre.innerHTML = "Nenhum paciente cadastrado."
    } else {
        pre.innerHTML = informacoes
    }
}

function removerPaciente() {
    let cpf = document.getElementById('cpfPesquisa').value
    let posicaoPaciente = -1

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].cpf === cpf) {
            posicaoPaciente = i
            break
        }
    }

    if (posicaoPaciente !== -1) {
        pacientes.splice(posicaoPaciente, 1)
        alert("Paciente removido com sucesso.")
        pre.innerHTML = ""
    } else {
        alert("Paciente não encontrado.")
    }

    form.reset()
}