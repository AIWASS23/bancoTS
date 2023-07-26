"use strict";
class Funcionario extends Pessoa {
    constructor(cpf, nome, telefone, salario, cargo) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargo = cargo;
    }
    autenticar() {
        return true;
    }
}
