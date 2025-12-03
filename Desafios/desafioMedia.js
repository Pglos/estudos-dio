const {gets ,print} = require('../Aulas/gets/funcoegets');

const media = gets();

    if (media >=0 && media < 5){
        print('Reporvado');
    }else if ( media >= 5 && media < 7){
        print('Recuperacao')
    }else{
        print('Aprovado')
    }