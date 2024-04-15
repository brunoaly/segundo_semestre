let form = document.getElementById("frm")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let nome = form.nome.value
    let cpf = Number(form.cpf.value)
    let salario = Number(form.salario.value)

    if (verificarCpf(cpf)) {
        alert("Esse CPF já está registrado")
        form.cpf.focus()
        return
    }

    if (localStorage.getItem("listaNome") == null) {
        localStorage.setItem("listaNome", nome)
        localStorage.setItem("listaCpf", cpf)
        localStorage.setItem("listaSalario", salario)

    } else {
        let listaNome = localStorage.getItem("listaNome") + ";" + nome
        let listaCpf = localStorage.getItem("listaCpf") + ";" + cpf
        let listaSalario = localStorage.getItem("listaSalario") + ";" + salario
        localStorage.setItem("listaNome", listaNome)
        localStorage.setItem("listaCpf", listaCpf)
        localStorage.setItem("listaSalario", listaSalario)
    }

    form.reset()
    form.nome.focus()

})

function verificarCpf(cpf) {

    let listaCpf = localStorage.getItem("listaCpf")
    let achou = false

    if (listaCpf != null) {
        listaCpf = listaCpf.split(";")
        for (let i = 0; i < listaCpf.length; i++) {
            if (listaCpf[i] == cpf) {
                achou = true
            }
        }
    }
    return achou
}

document.getElementById("btListar").addEventListener("click", (e) => {
    e.preventDefault()

    let listaNome = localStorage.getItem("listaNome")
    let listaCpf = localStorage.getItem("listaCpf")
    let listaSalario = localStorage.getItem("listaSalario")

    if (listaNome && listaCpf && listaSalario) {
        listaNome = listaNome.split(";")
        listaCpf = listaCpf.split(";")
        listaSalario = listaSalario.split(";")

        let consulta = []

        for (let i = 0; i < listaCpf.length; i++) {
            consulta.push({
                nome: listaNome[i],
                cpf: listaCpf[i],
                salario: Number(listaSalario[i]).toFixed(2),
            })
        }

        consulta.sort((a, b) => a.nome.localeCompare(b.nome))

        let print = document.getElementById("print")
        let card = ""

        if (consulta.length > 0) {
            consulta.forEach((professor) => {
                if (professor.nome !== "") {
                    card += `
                    <div class="card">
                      <div class="card-body">
                        Nome: ${professor.nome}
                      </div>
                      <div class="card-body">
                        CPF: ${professor.cpf}
                      </div>
                      <div class="card-body">
                        Salario: R$ ${professor.salario}
                      </div>
                    </div>`
                }
            })

        } else {
            card = `
            <div class="card">
                <div class="card-body">
                    Nenhum professor encontrado.
                </div>
            </div>`
        }

        print.innerHTML = card;

    } else {
        let print = document.getElementById("print");
        print.innerHTML = `
        <div class="card">
            <div class="card-body">
                Nenhum professor encontrado.
            </div>
        </div>`
    }
})

function listarProfessor() {
    let listaNome = localStorage.getItem("listaNome")
    let listaCpf = localStorage.getItem("listaCpf")
    let listaSalario = localStorage.getItem("listaSalario")

    if (listaNome != null) {
        listaNome = listaNome.split(";")
        listaCpf = listaCpf.split(";")
        listaSalario = listaSalario.split(";")

        let cpfInformado = Number(document.getElementById("cpfConsulta").value)
        let consulta = []

        for (let i = 0; i < listaCpf.length; i++) {

            if (Number(listaCpf[i]) === cpfInformado) {
                consulta.push({
                    nome: listaNome[i],
                    cpf: listaCpf[i],
                    salario: Number(listaSalario[i]).toFixed(2),
                })
            }

        }

        let print = document.getElementById("print")
        let card = ""

        if (consulta.length > 0) {
            consulta.forEach((professor) => {
                card += `
                <div class="card">
                  <div class="card-body">
                    Nome: ${professor.nome}
                  </div>
                  <div class="card-body">
                    CPF: ${professor.cpf}
                  </div>
                  <div class="card-body">
                    Salario: R$ ${professor.salario}
                  </div>
                </div>`
            })

        } else {
            card = `
            <div class="card">
                <div class="card-body">
                    Nenhum professor encontrado com o CPF informado.
                </div>
            </div>`
        }

        print.innerHTML = card
    }
}

document.getElementById("consultar").addEventListener("click", listarProfessor)

document.getElementById("btAtualizar").addEventListener("click", (e) => {
    e.preventDefault()

    let nome = form.nome.value
    let cpf = Number(form.cpf.value)
    let salario = Number(form.salario.value)

    if (nome === "" || isNaN(cpf) || isNaN(salario)) {
        alert("Preencha todos os campos corretamente.")
        return
    }

    let listaNome = localStorage.getItem("listaNome").split(";")
    let listaCpf = localStorage.getItem("listaCpf").split(";")
    let listaSalario = localStorage.getItem("listaSalario").split(";")

    let encontrado = false

    for (let i = 0; i < listaCpf.length; i++) {

        if (Number(listaCpf[i]) === cpf) {
            listaNome[i] = nome
            listaSalario[i] = salario.toFixed(2)
            encontrado = true
            break
        }
    }

    if (encontrado) {
        let novaListaNome = listaNome.join(";")
        let novaListaSalario = listaSalario.join(";")

        localStorage.setItem("listaNome", novaListaNome)
        localStorage.setItem("listaSalario", novaListaSalario)

        alert("Valores atualizados com sucesso.")

    } else {
        alert("CPF não encontrado na lista.")
    }

    form.reset()
    form.nome.focus()
})

document.getElementById("limpar").addEventListener("click", () => {

    let cpfInformado = Number(document.getElementById("cpfConsulta").value)

    let listaCpf = localStorage.getItem("listaCpf")

    if (listaCpf != null) {
        listaCpf = listaCpf.split(";")

        let aux = -1

        for (let i = 0; i < listaCpf.length; i++) {

            if (listaCpf[i] === String(cpfInformado)) {
                aux = i
                break
            }
        }

        if (aux !== -1) {
            let listaNome = localStorage.getItem("listaNome").split(";")
            let listaSalario = localStorage.getItem("listaSalario").split(";")

            listaNome.splice(aux, 1)
            listaCpf.splice(aux, 1)
            listaSalario.splice(aux, 1)

            localStorage.setItem("listaNome", listaNome.join(";"))
            localStorage.setItem("listaCpf", listaCpf.join(";"))
            localStorage.setItem("listaSalario", listaSalario.join(";"))

            listarProfessor()

            alert("Professor apagado com sucesso.")

        } else {
            alert("CPF não encontrado na lista.")
        }

    }

    document.getElementById("cpfConsulta").value = ""
    form.cpf.focus()

})
