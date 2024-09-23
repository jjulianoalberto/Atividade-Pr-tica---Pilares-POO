class Imovel {
    constructor(protected endereco: string, protected preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }
   
    imprimeInfo() {
        console.log(`Endereço: ${this.endereco}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

class Novo extends Imovel {
  

    constructor(endereco: string, preco: number, private adicionalPreco: number) {
        super(endereco, preco);
        this.adicionalPreco = adicionalPreco;
    }

    
    getAdicionalPreco(): number {
        return this.adicionalPreco;
    }

   
    setAdicionalPreco(adicionalPreco: number) {
        if (adicionalPreco >= 0) {
            this.adicionalPreco = adicionalPreco;
        } else {
            console.log("O valor não pode ser negativo.");
        }
    }

    
    imprimeInfo() {
        const precoFinal = this.preco + this.adicionalPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Adicional: R$ ${this.adicionalPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}

class Velho extends Imovel {

    constructor(endereco: string, preco: number, private descontoPreco: number) {
        super(endereco, preco);
        this.descontoPreco = descontoPreco;
    }

   
    getDescontoPreco(): number {
        return this.descontoPreco;
    }

    
    setDescontoPreco(descontoPreco: number) {
        if (descontoPreco >= 0) {
            this.descontoPreco = descontoPreco;
        } else {
            console.log("Erro: O valor do desconto não pode ser negativo.");
        }
    }

    imprimeInfo() {
        const precoFinal = this.preco - this.descontoPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Desconto: R$ ${this.descontoPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}


const imovelNovo = new Novo("Rua Graça Aranha, 123", 500000, 10000);
imovelNovo.imprimeInfo(); 


const imovelVelho = new Velho("Av. Presidente Lucena, 1234", 400000, 20000);
imovelVelho.imprimeInfo(); 
