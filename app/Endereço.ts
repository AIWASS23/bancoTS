class Endereco {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
  
    constructor(
      cep: string,
      logradouro: string,
      numero: string,
      complemento: string,
      cidade: string,
      uf: string
    ) {
      this.cep = cep;
      this.logradouro = logradouro;
      this.numero = numero;
      this.complemento = complemento;
      this.cidade = cidade;
      this.uf = uf;
    }
  }