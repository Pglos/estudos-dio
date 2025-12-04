const {gets , print} = require('../Aulas/gets/funcoegets');


const n = gets();
let maiorNumeropar = null;
let menorNumeroImpar = null;

for (let index = 0; index < n ; index++) {
    
    const numero = gets();
    
    if(numero % 2 === 0 ){

        if(maiorNumeropar === null || numero > maiorNumeropar){
            maiorNumeropar = numero;
        }
    }else {

        if(  menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
    }
    
}
}

print(maiorNumeropar);
print(menorNumeroImpar);
