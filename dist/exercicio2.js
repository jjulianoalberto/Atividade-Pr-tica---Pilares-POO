"use strict";
class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
        this.endereco = endereco;
        this.preco = preco;
    }
    imprimeInfo() {
        console.log(`Endereço: ${this.endereco}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}
class Novo extends Imovel {
    constructor(endereco, preco, adicionalPreco) {
        super(endereco, preco);
        this.adicionalPreco = adicionalPreco;
        this.adicionalPreco = adicionalPreco;
    }
    getAdicionalPreco() {
        return this.adicionalPreco;
    }
    setAdicionalPreco(adicionalPreco) {
        if (adicionalPreco >= 0) {
            this.adicionalPreco = adicionalPreco;
        }
        else {
            console.log("O valor não pode ser negativo.");
        }
    }
    imprimeInfo() {
        const precoFinal = this.preco + this.adicionalPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Adicional: R$ ${this.adicionalPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}
class Velho extends Imovel {
    constructor(endereco, preco, descontoPreco) {
        super(endereco, preco);
        this.descontoPreco = descontoPreco;
        this.descontoPreco = descontoPreco;
    }
    getDescontoPreco() {
        return this.descontoPreco;
    }
    setDescontoPreco(descontoPreco) {
        if (descontoPreco >= 0) {
            this.descontoPreco = descontoPreco;
        }
        else {
            console.log("Erro: O valor do desconto não pode ser negativo.");
        }
    }
    imprimeInfo() {
        const precoFinal = this.preco - this.descontoPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Desconto: R$ ${this.descontoPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}
const imovelNovo = new Novo("Rua das Flores, 123", 500000, 10000);
imovelNovo.imprimeInfo();
const imovelVelho = new Velho("Av. Brasil, 456", 400000, 20000);
imovelVelho.imprimeInfo();
