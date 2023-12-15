const fs = require('fs');

class Categoria {
    nome;
    tipo = ['Entrada', 'Saída']
    static listaDeCategorias = []

    constructor(nome, tipo) {
        if (this.tipo.includes(tipo)) {
            this.nome = nome;
            this.tipo = tipo;
        }

        Categoria.listaDeCategorias.push(this);
        Categoria.salvarNoJSON('base/categorias.json');

    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    static salvarNoJSON(caminho) {
        const dadosJSON = JSON.stringify(Categoria.listaDeCategorias, null, 2);
        fs.writeFileSync(caminho, dadosJSON);
        
    }
}

module.exports = Categoria;
