import Carro from './carro'
import Moto from './moto'

const carro: Carro = new Carro('Etios', 4);

carro.acelerar();
carro.acelerar();

const moto: Moto = new Moto();

moto.acelerar();
moto.acelerar();

console.log(moto);
console.log(carro);