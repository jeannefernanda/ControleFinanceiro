class Conta {
    nome;
    tipo = ['Conta Corrente', 'Poupança', 'Carteira'];
    saldoInicial = 0
    static listaDeContas = []

    constructor(nome, tipo, saldoInicial) {
        if (this.tipo.includes(tipo)) {
            this.nome = nome;
            this.tipo = tipo;
            this.saldoInicial = saldoInicial;
        } else {
            throw new Error('Tipo de conta inválida.')
        }
        Conta.listaDeContas.push(this)

    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(novoTipo) {
        this.tipo = novoTipo;
    }

    getSaldoInicial() {
        return this.saldoInicial
    }

    setSaldoInicial(novoSaldoInicial) {
        this.saldoInicial = novoSaldoInicial;
    }
}

module.exports = Conta;