/* const Pedro = {
    nome: 'Pedro Gabriel',
    idade: 25,
    altura: 175,


    descrever: function(){
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
};

Pedro.Profissao = 'dev';

delete Pedro.altura;

console.log(Pedro);

Pedro.descrever();

console.log(Pedro['nome']);

Pedro['nome'] = 'PEDRO L';

console.log(Pedro['nome']); */ 

/* class pessoa{
    nome;
    idade;

    constructor( nome ,idade){
        this.nome = nome;
        this.idede = idade ;
    }
    

    descrever(){
         console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}

function idadepessoas(pessoa1,pessoa2){

    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    }else if(pessoa2.idade > pessoa1.idade ){
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`);
    } else {
         console.log(`${pessoa2.nome} é ${pessoa1.nome} tem a mesma idade`);
    }

}

//instancia 
const pedro = new pessoa('Pedro', 25);
const lucas = new pessoa('Lucas' , 24);

idadepessoas(pedro, lucas);

*/ 

//EXERCICIOS 


class carros {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor ,gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;

    }


    calcularGastos(distancia , precoCombustivel ){
        return distancia * this.gastoMedioKm * precoCombustivel;
    }

}

const celta = new carros('chev' , 'branco' , 1/12);

console.log(celta.calcularGastos(70, 5));
