const {gets , print} = require('./funcoegets');

const quantidadeDeAlunos = gets();
let maiorValor = 0

for (let index = 0; index < 5; index++) {
    const numSorteado = gets();
    if (numSorteado > maiorValor){
        maiorValor = numSorteado;
}
}

print(maiorValor);