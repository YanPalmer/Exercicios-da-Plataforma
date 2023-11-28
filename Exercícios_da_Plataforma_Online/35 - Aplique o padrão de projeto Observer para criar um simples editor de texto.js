// Classe Observável (Subject)
class Editor {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }

    insertLine(lineNumber, text) {
        console.log(`Inserindo linha ${lineNumber}: ${text}`);
        this.notify('lineInserted', { lineNumber, text });
    }

    removeLine(lineNumber) {
        console.log(`Removendo linha ${lineNumber}`);
        this.notify('lineRemoved', { lineNumber });
    }
}

// Classe Observadora (Observer)
class TextObserver {
    constructor(editor) {
        this.editor = editor;
        this.editor.addObserver(this);
        this.lines = [];
    }

    update(event, data) {
        if (event === 'open') {
            console.log('Editor aberto.');
        } else if (event === 'save') {
            console.log('Conteúdo salvo:');
            this.lines.forEach(line => console.log(line));
        } else if (event === 'lineInserted') {
            this.insertLine(data.lineNumber, data.text);
        } else if (event === 'lineRemoved') {
            this.removeLine(data.lineNumber);
        }
    }

    insertLine(lineNumber, text) {
        this.lines.splice(lineNumber - 1, 0, text);
    }

    removeLine(lineNumber) {
        this.lines.splice(lineNumber - 1, 1);
    }
}

// Subclasse da classe Editor
class TextEditor extends Editor {
    constructor() {
        super();
    }
}

// Exemplo de uso
const textEditor = new TextEditor();
const textObserver = new TextObserver(textEditor);

textEditor.notify('open');

// Receber as linhas de texto do usuário
let lineNumber = 1;
let inputText = '';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    if (input.trim().toUpperCase() === 'EOF') {
        rl.close();
        textEditor.notify('save');
    } else {
        textEditor.insertLine(lineNumber++, input);
    }
});

rl.on('close', () => {
    process.exit(0);
});
