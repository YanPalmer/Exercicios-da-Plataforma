class SistemaSeguranca {
    static instancia = null;
    senhaBaseSecreta = "senhaSuperSecreta";

    constructor() { }

    static obterInstancia() {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    acessarBaseSecreta(senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta.");
        } else {
            console.log("Acesso negado. Senha incorreta.");
        }
    }
}

const sistemaSeguranca = SistemaSeguranca.obterInstancia();

sistemaSeguranca.acessarBaseSecreta("senhaIncorreta");

sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta");
