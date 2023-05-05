// problema da moda
const entrada = [256,1,5,91,83,256,4,5,60,7,8,29,42,8,42,24,5,42,256,0]
const encontrarModa = (arr) => {
    let moda = [];
    let maior = 0;

    const consulta = arr.filter((item,index) => {
        return arr.indexOf(item) === index;
    })

    const ocurrences = arr.reduce((acc, item) => {
        return acc[item] ? ++acc[item] : acc[item] = 1, acc
    }, {}); 

    for(let i= 0; i < consulta.length; i++){
       if(ocurrences[consulta[i]] >= maior){
            maior = ocurrences[consulta[i]]
            numero = consulta[i]
            moda.push(numero)
        }
    }
    return moda.sort((a,b) => a-b)
}

encontrarModa(entrada)