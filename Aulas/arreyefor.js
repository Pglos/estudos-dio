/* const notas = [];

notas.push(5);
notas.push(8);
notas.push(9);
notas.push(4);

let soma = 0;

for (let i = 0 ; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
*/

/*
const num = 5;
for (let index = 1; index <= 10 ; index++) {
    console.log(index * num)
    
}*/

const num = [1,2,3,4,5,6,7,8,9];

for (let index = 0; index < num.length; index++) {
    const numero = num[index];

    if (numero % 2 === 0){
        console.log(numero)
    }
    
}