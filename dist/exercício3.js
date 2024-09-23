"use strict";
// Superclasse Animal
class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }
    respirar() {
        console.log(`O ${this.nome} pertence à espécie ${this.especie}, com idade de ${this.idade}, está respirando.`);
    }
    caminhar() {
        console.log(`O ${this.nome} pertence à espécie ${this.especie}, com idade de ${this.idade}, está caminhando.`);
    }
    getEspecie() {
        return this.especie;
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "Cachorro");
    }
    latir() {
        console.log(`O ${this.nome} pertence à espécie ${this.especie}, com idade de ${this.idade}, está latindo: Au Au!`);
    }
}
class Cavalo extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "Cavalo");
    }
    relinchar() {
        console.log(`O ${this.nome} pertence à espécie ${this.especie}, com idade de ${this.idade}, está relinchando: Iiirrrrí Iiirrrrí!`);
    }
}
class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "Gato");
    }
    miar() {
        console.log(`O ${this.nome} pertence à espécie ${this.especie}, com idade de ${this.idade}, está miando: Miau Miau!`);
    }
}
const cachorro = new Cachorro("Lasanha", 2);
cachorro.respirar();
cachorro.caminhar();
cachorro.latir();
const cavalo = new Cavalo("Pé de pano", 5);
cavalo.respirar();
cavalo.caminhar();
cavalo.relinchar();
const gato = new Gato("Bisteca", 2);
gato.respirar();
gato.caminhar();
gato.miar();
