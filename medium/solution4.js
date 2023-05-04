
const entrada = "gogo";

const verificarPalavraMagica = (string) => {
    let array = string.split('')
    if(string.length % 2 === 0){
        let arrayTwo = array.splice(string.length/2)
        arrayTwo.sort()
        array.sort()
        if(array.join("") === arrayTwo.join("")){
            console.log("S")
        }else{
            console.log("N")
        }
    }else {
        console.log("N")
    }

}

verificarPalavraMagica(entrada)