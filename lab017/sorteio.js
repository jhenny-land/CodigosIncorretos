
function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.querySelector('section#result')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}
    function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = window.document.querySelector('section#result')
    res.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.` // Vai esvaziar a section toda
}