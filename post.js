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

function enviarPalavra() {
    event.preventDefault()
    
    let url = "https://desafio9.onrender.com/decrypt_message"
    let palavraCodificada = document.getElementById("pcodificada").value
    let chave = document.getElementById("pchave").value

    console.log(palavraCodificada)
    console.log(chave)

    body = {
        "encrypted_message": palavraCodificada,
        "keyword": chave
    }

    fazPost(url, body)
}
