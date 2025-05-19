 function verificarPalavra() {
    const palavra = document.getElementById("palavra").value.toLowerCase()
    const palavraCorreta = "sanfona"

    if(palavra == palavraCorreta){
        window.location.href ="correto.html"
    } else {
        window.location.href = "erro.html"
    }
 }