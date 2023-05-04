//Problema do giro da palavra
const entrada1 = "programacao";
const entrada2 = "rogramacaop";
const verificarPalavra = (stringConsulta, stringRotacao) => {
    let array = stringRotacao.split("")
    for(let i = 0; i < stringRotacao.length-1; i++){
        array.push(array[0])
        array.shift()
        if(stringConsulta === array.join("")){
            console.log(1)
        }else {
            console.log(0) 
        }
    }
}
verificarPalavra(entrada1, entrada2)