const fs = require('fs')

class Principal {
    static listaDeTransacoes = []

    static calcularEntradas() {
        let somaEntradas = 0;
        for (let i = 0; i < Principal.listaDeTransacoes.length; i++) {
            if (Principal.listaDeTransacoes[i].categoria.tipo === "Entrada") {
                somaEntradas += Principal.listaDeTransacoes[i].valor;
                Principal.salvarNoJSON('dados.json')
            }
        }
        return somaEntradas;
    }

    static calcularSaidas() {
        let somaSaidas = 0;
        for (let i = 0; i < Principal.listaDeTransacoes.length; i++) {
            if (Principal.listaDeTransacoes[i].categoria.tipo === "Saída") {
                somaSaidas += Principal.listaDeTransacoes[i].valor;
            }
        }
        return somaSaidas;
    }

    static CalcularSaldoDisponivel() {
        return this.calcularEntradas() - this.calcularSaidas();
    }

    static salvarNoJSON(caminho) {
        const dadosJSON = JSON.stringify(this.listaDeTransacoes, null, 2);
        fs.writeFileSync(caminho, dadosJSON);
        console.log('Dados salvos com sucesso.');
    }

}

module.exports = Principal;