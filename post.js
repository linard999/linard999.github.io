function fazPost(url, body) {
    console.log("Body=", body)

    let request = new XMLHttpRequest()

    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function enviarPalavraCodificada() {
    event.preventDefault()
    
    let url = "https://desafio9.onrender.com/decrypt_message"
    let palavraCodificada = document.getElementById("pcodificada").value
    let chave = document.getElementById("pchavecod").value

    console.log(palavraCodificada)
    console.log(chave)

    body = {
        "encrypted_message": palavraCodificada,
        "keyword": chave
    }

    fazPost(url, body)
}

function enviarPalavraDescodificada() {
    event.preventDefault()

    let palavraDescodificada = document.getElementById("pdescodificada").value
    let chave = document.getElementById("pchavedescod").value
    let chaveParcial = ""
    let chaveFinal = ""
    let alfabetoGeral = "abcdefghijklmnopqrstuvwxyz"
    let alfabetoAtual = ""
    let resultado = ""

    while (chaveParcial.length < palavraDescodificada.length) {
        chaveParcial = chaveParcial + chave
    }

    if (chaveParcial.length >= palavraDescodificada.length) {
        chaveFinal = chaveParcial.substring(0, palavraDescodificada.length)
    }

    for (let i = 0; i < palavraDescodificada.length; i++) {
        if (palavraDescodificada[i] == 'a') {
            alfabetoAtual = alfabetoGeral
        } else {
            let alfabetoAtual1 = alfabetoGeral.substring(alfabetoGeral.indexOf(palavraDescodificada[i]))
            let alfabetoAtual2 = alfabetoGeral.substring(0, alfabetoGeral.indexOf(palavraDescodificada[i]))
            alfabetoAtual = alfabetoAtual1 + alfabetoAtual2
        }
        let indiceAtual1 = alfabetoGeral.indexOf(palavraDescodificada[i])
        let indiceAtual2 = alfabetoGeral.indexOf(chaveFinal[i])
        let indiceAtual = (indiceAtual1 + indiceAtual2) % 26
        resultado = resultado + alfabetoGeral[indiceAtual]
    }

    console.log(resultado)
}
