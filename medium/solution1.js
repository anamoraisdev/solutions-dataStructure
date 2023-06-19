// Problema das sequencias alternadas

let arrayEntrada = [87,55,34,0,53,21,8,61,82,9,80,78,1,10,99,4,78,43,71,23]

const lerSequencias = (n, arr) => {
    const arrays = []

    for(let i = 0; i < n ; i++){
        let arrayCount = []
        for(let i = 0; i < 5; i ++){
            arrayCount.push(arr[i])
        }
        arrays.push(arrayCount)
        arrayCount = [];
        arr.splice(0,5)
    }

    arrays.map((arr, index) => {
        if(index === 0 || index % 2 === 0){
            arr.sort((a, b) => a-b)
        }else{
            arr.sort((a,b) => b - a)
        }
    })

    return arrays;
}

lerSequencias(4, arrayEntrada)

