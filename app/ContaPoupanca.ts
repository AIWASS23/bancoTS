class ContaPoupanca extends Conta {
  constructor(numero: string) {
    super(numero);
  }

  depositar(valor: number): void {
    this.saldo += valor;
    const dataAtual = new Date();
    const credito = new Credito(valor, dataAtual, this);
    this.creditos.push(credito);
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      this.saldo -= valor;
      const dataAtual = new Date();
      const debito = new Debito(valor, dataAtual, this);
      this.debitos.push(debito);
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

    return saldoTotal;
  }
}
