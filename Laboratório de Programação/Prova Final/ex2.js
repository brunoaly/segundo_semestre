function salvar() {
    let titulo = document.getElementById("titulo").value
    let banda = document.getElementById("banda").value

    if (titulo && banda) {
        let musicas = localStorage.getItem("musicas") || ""
        musicas += titulo + " - " + banda + "\n"
        localStorage.setItem("musicas", musicas)

        document.getElementById("titulo").value = ""
        document.getElementById("banda").value = ""

        alert("Música salva com sucesso!")
    } else {
        alert("Por favor, preencha todos os campos!")
    }
}

function mostrar() {
    let musicas = localStorage.getItem("musicas")

    if (musicas && musicas.length > 0) {
        document.getElementById("pre").textContent = musicas
    } else {
        alert("Não há músicas armazenadas.")
    }
}

