//problema da letra mais frequente
const entrada = "aAb;Cj;ja;[c";

const calcularFrequencia = (value) => {
    const caracteres = [";", "[", "]", "{", "}", "*", ",", "#", "%", "&", "$"]
    const strings = value.toLowerCase().split('');
    let arrayString = [];

    strings.forEach(item => {
        if(!caracteres.includes(item)){
            arrayString.push(item)
        }
    });

    const calcularPorcentagem = (arrayString) => {
        let maior = 0;
        let letra;

        const consulta = arrayString.filter((item,index)=>{
            return arrayString.indexOf(item) === index;
        })

        const ocurrences = arrayString.reduce((acc, curr) => {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {}); 

       for(let i = 0; i < consulta.length; i++){
          let porcentagem = ocurrences[consulta[i]]/arrayString.length * 100
          if(porcentagem > maior){
            maior = porcentagem.toFixed(2) + "%"
            letra = consulta[i]
          }
        }
        return letra, maior
    }
    calcularPorcentagem(arrayString)
}

calcularFrequencia(entrada);