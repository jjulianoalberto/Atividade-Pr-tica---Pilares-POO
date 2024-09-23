abstract class Ingresso {
    constructor(protected valor: number) {
        this.valor = valor;
    }

    abstract imprimeValor(): void;
}

class Normal extends Ingresso {

    constructor(valor: number) {
        super(valor);
    }

    
    imprimeValor() {
        console.log(`Ingresso Normal R$ ${this.valor.toFixed(2)} reais.`);
    }
}


class VIP extends Ingresso {
    
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }
    
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Ingresso VIP R$ ${valorTotal.toFixed(2)} reais. (Valor Normal: R$ ${this.valor.toFixed(2)} reais + Adicional VIP: R$ ${this.valorAdicional.toFixed(2)} reais)`);
    }
}

class Camarote extends Ingresso {
   
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }
   
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Ingresso Camarote R$ ${valorTotal.toFixed(2)} reais. (Valor Normal: R$ ${this.valor.toFixed(2)} reais + Adicional Camarote: R$ ${this.valorAdicional.toFixed(2)} reais.)`);
    }
}


const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor(); 


const ingressoVIP = new VIP(50, 10);
ingressoVIP.imprimeValor(); 


const ingressoCamarote = new Camarote(50, 20);
ingressoCamarote.imprimeValor(); 
