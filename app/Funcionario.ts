class Funcionario extends Pessoa implements User {
    salario: number;
    cargo: Cargo;
  
    constructor(cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo) {
      super(cpf, nome, telefone);
      this.salario = salario;
      this.cargo = cargo;
    }
    autenticar(): boolean {
      return true;
    }
  }