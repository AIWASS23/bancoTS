class ContaCorrente extends Conta {
    limite: number;
  
    constructor(numero: string, limite: number) {
      super(numero);
      this.limite = limite;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
      const dataAtual = new Date();
      const credito = new Credito(valor, dataAtual, this); 
      this.creditos.push(credito);
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo + this.limite) {
        console.log("Saldo insuficiente para saque.");
      } else {
        this.saldo -= valor;
        const dataAtual = new Date();
        const debito = new Debito(valor, dataAtual, this); 
        this.debitos.push(debito);
      }
    }
  
    transferir(contaDestino: Conta, valor: number): void {
      if (valor > this.saldo + this.limite) {
        console.log("Saldo insuficiente para transferência.");
      } else {
        this.saldo -= valor;
        contaDestino.depositar(valor);
        const dataAtual = new Date();
        const debito = new Debito(valor, dataAtual, this); 
        const credito = new Credito(valor, dataAtual, contaDestino); 
        this.debitos.push(debito);
        contaDestino.creditos.push(credito);
      }
    }
  
    calcularSaldo(): number {
      let saldoTotal = 0;
  
      for (const credito of this.creditos) {
        saldoTotal += credito.valor;
      }
  
      for (const debito of this.debitos) {
        saldoTotal -= debito.valor;
      }
  
      saldoTotal += this.limite;
      return saldoTotal;
    }
  }
  