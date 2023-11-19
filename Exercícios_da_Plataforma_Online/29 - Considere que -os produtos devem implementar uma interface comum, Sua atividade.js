// Definição da interface comum
class Computer {
    constructor(type, ram, hdd, cpu) {
      this.type = type;
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    toString() {
      return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Fábrica para criar instâncias do tipo abstrato da interface
  class ComputerFactory {
    createComputer(type, ram, hdd, cpu) {
      if (type === 'pc') {
        return new PC(type, ram, hdd, cpu);
      } else if (type === 'server') {
        return new Server(type, ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador desconhecido');
      }
    }
  }
  
  // Computador do tipo PC
  class PC extends Computer {
    constructor(type, ram, hdd, cpu) {
      super(type, ram, hdd, cpu);
    }
  }
  
  // Computador do tipo Server
  class Server extends Computer {
    constructor(type, ram, hdd, cpu) {
      super(type, ram, hdd, cpu);
    }
  }
  
  // Exemplo de uso
  const computerFactory = new ComputerFactory();
  
  const pc = computerFactory.createComputer('pc', 8, 256, 2.4);
  const server = computerFactory.createComputer('server', 16, 512, 3.0);
  
  console.log(pc.toString());    // Saída: Type: pc, RAM: 8GB, HDD: 256GB, CPU: 2.4GHz
  console.log(server.toString());  // Saída: Type: server, RAM: 16GB, HDD: 512GB, CPU: 3.0GHz
  