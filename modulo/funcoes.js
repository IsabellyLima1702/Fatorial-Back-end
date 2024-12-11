const ValidarFatorial = function(numero){
    let ValorÚnico = numero
    let status = true

    if(ValorÚnico == ''){
        console.log('ERRO: É obrigatorio o preenchimento deste dado.')
        status = false

    }else{
        if(isNaN(ValorÚnico) == true){
            console.log ('ERRO: É obrigatorio a entrada de valores numericos neste dado.')
            status = false

        }else{

        if(ValorÚnico <= 1){
            console.log('ERRO: É obrigatorio a entrada de um valor maior que 1.')
            status = false
            
        }else{

        if (ValorÚnico === 0){
             console.log('ERRO: Não é possível fatorar um numero por 0.')
             status = false

            } 
        }
      }
    }
    return status
}


const ValidarResultado = function(numero){
    let fatorial = numero
    let status = false
    
    
    for(let valorÚnico, contador=2; contador<=numero; contador++){
        fatorial = fatorial*contador
        status = true

        console.log(`O fatorial de ${numero} é = ${fatorial}`)
    }
    return status
} 

// Professor, eu não consegui identificar o porquê que ele ta contando mais do que devia

module.exports = {
    ValidarFatorial,
    ValidarResultado
}