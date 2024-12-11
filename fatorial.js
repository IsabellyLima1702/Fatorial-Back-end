var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite um número:', function(numero){
    let valorÚnico = numero
    let contador = numero
    let fatorial = numero

    console.log(moduloFuncoes.ValidarFatorial (valorÚnico, contador, fatorial))
    console.log(moduloFuncoes.ValidarResultado (contador, fatorial))
})