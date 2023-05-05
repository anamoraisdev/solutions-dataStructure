//Problema do conjunto e seus elementos repetidos
const entrada = [10,10, 9, 9, 8,8,7, 7, 6, 6]

const eliminarRepeticao = (numbers) => {
    let result = numbers.reduce(function (acumulador, item) {
        if(acumulador.indexOf(item) === -1){
            acumulador.push(item)
        }
        return acumulador;
    }, []);

    result.sort((a,b) => a-b).map((number) => {
        console.log(number)
    })
}

eliminarRepeticao(entrada)
