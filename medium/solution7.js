const entrada = [[0, 1],[1, 1],[2, 2],[2, 4],[9, 3],[625, 25],[0, 0]]

const simplificarFracoes = (fracoes) => {
    const arr = []
    let denominador;
    let numerador;
    fracoes.forEach(element => {
        if(element[0] === 0 && element[1] === 0){
            return
        }else if(element[0] <= element[1] && element[0] != 0){
            denominador = element[0]/element[0]
            numerador = element[1]/element[0]
            arr.push([denominador, numerador])
        }else{
            denominador = element[0]/element[1]
            numerador = element[1]/element[1]
            arr.push([denominador, numerador])
        }
    });

   arr.map((item) => {
        return item[0] , item[1]
   })

}

simplificarFracoes(entrada)