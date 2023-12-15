class Usuario {
    nome;
    static listaDeUsuarios = []

    constructor(nome) {
        this.nome = nome;
        Usuario.listaDeUsuarios.push(this);
    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }
}

module.exports = Usuario;