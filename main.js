class Veiculo {
}

class Carro extends Veiculo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    mover() {
        console.log(`O carro ${this.modelo} está a 80km por hora.`);
    }
}

class Moto extends Veiculo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    mover() {
        console.log(`A moto ${this.modelo} está parada.`);
    }
}

const carro1 = new Carro('Corola');
const carro2 = new Carro('Civic');
const moto = new Moto('Hornet');

carro1.mover(); 
carro2.mover(); 
moto.mover(); 

