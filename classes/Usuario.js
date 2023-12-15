const fs = require('fs');

class Usuario {
    nome;
    static listaDeUsuarios = []

    constructor(nome) {
        this.nome = nome;
        Usuario.listaDeUsuarios.push(this);
        Usuario.salvarNoJSON('base/usuarios.json')
    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    static salvarNoJSON(caminho) {
        const dadosJSON = JSON.stringify(Usuario.listaDeUsuarios, null, 2);
        fs.writeFileSync(caminho, dadosJSON);
        console.log('Dados salvos com sucesso.');
    }
}

module.exports = Usuario;