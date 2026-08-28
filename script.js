
const inputValor =  document.getElementById("inputValor")
const inputPorcentagem = document.getElementById("inputPorcentagem")
const botao = document.getElementById("btn-calcular")

const total = document.getElementById("total")

botao.addEventListener("click", function() {

    const valor = Number(inputValor.value)
    const porcentagem = Number(inputPorcentagem.value)

    const aumento = valor * (porcentagem / 100)
    const resultado = valor + aumento 

    total.textContent = `Total: R$ ${resultado.toFixed(2)}`

})


