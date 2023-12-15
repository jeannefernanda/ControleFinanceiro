const fs = require('fs');

class Cartao {
    nome;
    limite;
    vencimento;
    fechamento;
    static listaDeCartoes = []

    constructor(nome, limite, vencimento, fechamento) {
        this.nome = nome;
        this.limite = limite;
        this.vencimento = vencimento;
        this.fechamento = fechamento;
        Cartao.listaDeCartoes.push(this);
        Cartao.salvarNoJSON('base/cartoes.json');
        
    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    getLimite() {
        return this.limite;
    }

    setLimite(novoLimite) {
        this.limite = novoLimite;
    }

    getVencimento() {
        return this.vencimento;
    }

    setVencimento(novoVencimento) {
        this.vencimento = novoVencimento;
    }

    getFechamento() {
        return this.fechamento
    }

    setFechamento(novoFechamento) {
        this.fechamento = novoFechamento;
    }

    static salvarNoJSON(caminho) {
        const dadosJSON = JSON.stringify(Cartao.listaDeCartoes, null, 2);
        fs.writeFileSync(caminho, dadosJSON);
        
    }
}

module.exports = Cartao;