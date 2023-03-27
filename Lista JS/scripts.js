function subtraiValor(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let final = n1 - n2
    alert(" O resultado é: " + final)


}

function multiplicaValor(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let total = n1 * n2 * n3
    alert(" O resultado é: " + total)



}

function divideValor(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let total = n1/n2
    alert(" O resultado é: " + total)



}

function mediaPond(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let final = (( n1 *2 ) + ( n2 * 3 )) /5
    alert(" Sua nota final é: " + final)

}

function precoDesconto(){
    let preço = Number(document.getElementById("preço").value)
    let desconto = preço * 0.1
    let total = preço - desconto
    alert(" O preço do produto com desconto é de: " + total)
}

function salarioFinal(){
    let s1 = Number(document.getElementById("s1").value)
    let vendas = Number(document.getElementById("vendas").value)
    let final = vendas * 0.04
    let total = s1 + final
    alert(" O seu salário final é: " + total)


}

function calculoPeso(){
    let peso = Number(document.getElementById("peso").value)
    let engordar = peso * 0.15
    let pesomais = engordar + peso
    let emagrecer = peso * 0.20
    let pesomenos = peso - emagrecer
    alert(" Caso você engorde 15% seu peso será de: " + pesomais)
    alert(" Caso você emagreça 20% seu peso será de: " + pesomenos)

}

function kiloParagramas(){
    let peso = Number(document.getElementById("kilo").value)
    let gramas = peso * 1000
    let total = gramas
    alert(" Seu peso em grama é: " + total)

}

function areaTrapezio(){
    let bmaior = Number(document.getElementById("bmaior").value)
    let bmenor = Number(document.getElementById("bmenor").value)
    let altura = Number(document.getElementById("altura").value)
    let formula = (bmaior + bmenor) * altura /2
    alert("A área deste trapézio é: " + formula)
}

function areaDoquadrado(){
    let lado = Number(document.getElementById("lado").value)
    let formula = lado * lado
    alert(" A área desse quadrado é: " + formula)
    
}