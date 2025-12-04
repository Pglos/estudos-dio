const entradas = [5,3,4,1,10,8];
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