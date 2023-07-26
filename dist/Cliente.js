"use strict";
class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, enderecos, conta) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = enderecos;
        this.conta = conta;
    }
    autenticar() {
        return true;
    }
    listarEnderecos() {
        console.log(`Endereços do cliente ${this.nome}:`);
        for (const endereco of this.enderecos) {
            console.log(`
        CEP: ${endereco.cep}
        Logradouro: ${endereco.logradouro}
        Número: ${endereco.numero}
        Complemento: ${endereco.complemento}
        Cidade: ${endereco.cidade}
        UF: ${endereco.uf}
      `);
        }
    }
}
