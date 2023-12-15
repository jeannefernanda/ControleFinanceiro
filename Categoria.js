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

    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }
}

module.exports = Categoria;
