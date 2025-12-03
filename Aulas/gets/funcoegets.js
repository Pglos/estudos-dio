const entradas = [6];
let index = 0


function gets(){
    const valor =  entradas[index];
    index++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print}