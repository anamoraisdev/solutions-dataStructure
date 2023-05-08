//Problema do colecionador de moedas
const moedasDoColecionador = [4,0];
const catalogoMoedas = [9,4,7,8,17];

const pegarMaxMoedas = (catalogo, moedasColecionador) => {
    let saldo = 0;
    let count = 0;

    moedasColecionador.map((moeda) => {
        catalogo.map((item, index) => {
            if(moeda === index){
                saldo += item 
            }
        })
    })

    for(let i = 0; i <= catalogo.length; i++){
        let min = Math.min(...catalogo)
        if(saldo >= min){
            let result = saldo - min
            let index = catalogo.indexOf(min)
            if(index > -1){
                catalogo.splice(index,1)
            }
            saldo = result
            count ++
        }
    }

    return count
}

pegarMaxMoedas(catalogoMoedas, moedasDoColecionador)