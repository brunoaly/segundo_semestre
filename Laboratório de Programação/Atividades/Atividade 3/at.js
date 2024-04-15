let professores = []
let form = document.querySelector('form')
let resposta = document.getElementById("saida")
let aux = ""
let body = document.getElementById("body")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let aulas = Number(document.getElementById("aulas").value)
    let horaAula = Number(document.getElementById("horaAula").value)

    if (nome.toLowerCase() == "selmini") {
        body.style = "background-image: url(selmini.jpg)"
    }


    if (checharCPF() == true) {
        professores.push(new Professor(cpf, nome, aulas, horaAula))
        aux = aux + professores[professores.length - 1].retornar()
        console.log(professores)
        console.log(aux)
        resposta.innerHTML += professores[professores.length - 1].retornar() + "<br>"

    }
    else {
        alert("cpf já cadastrado, tente outro cpf")
    }


})

class Professor {
    constructor(cpf, nome, aulas, horaAula) {
        this.cpf = cpf
        this.nome = nome
        this.aulas = aulas
        this.horaAula = horaAula
    }

    calcularSalario() {
        let sb = this.aulas * 4.5 * this.horaAula
        let ha = sb * 0.05
        let dsr = (sb + ha) / 6
        let salario = sb + ha + dsr

        return salario.toFixed(2)
    }

    retornar() {
        let aux = `
        nome: ${this.nome}
        cpf: ${this.cpf}
        salário: ${this.calcularSalario()}
        `
        return aux
    }
}

function checharCPF() {
    for (let i = 0; i < professores.length; i++) {
        if (cpf.value == professores[i].cpf) {
            return false
        }
    }
    return true
}