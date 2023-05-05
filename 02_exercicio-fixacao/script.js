// EXERCICIO DE FIXAÇÃO


// Perguntar sua idade
let idade = Number(prompt("Qual sua idade?"))
console.log (idade)


// Perguntar idade do seu melhro amigo
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
console.log (idadeAmigo)



// Imprimir a mensagem e a resposta

// Mensagem:
//console.log ("Sua idade é maior do que a do seu amigo?")

const comparacao = idade > idadeAmigo
console.log (comparacao)
//código da resposta para associar à mensagem

console.log ("Sua idade é maior do que a do seu amigo?", comparacao)

//Imprimir no console a diferença de idade
diferencaIdade = idade - idadeAmigo
console.log (diferencaIdade)

