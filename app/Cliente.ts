class Cliente extends Pessoa implements User {
  vip: boolean;
  enderecos: Endereco[];
  conta: Conta;

  constructor(cpf: string, nome: string, telefone: string, vip: boolean, enderecos: Endereco[], conta: Conta) {
    super(cpf, nome, telefone);
    this.vip = vip;
    this.enderecos = enderecos;
    this.conta = conta
    
  }
  autenticar(): boolean {
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
