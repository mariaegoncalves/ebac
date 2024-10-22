// Classe Abstrata
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Não é possível instanciar uma classe abstrata!");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("Método 'emitirSom' deve ser implementado.");
    }

    descrever() {
        return `${this.nome} tem ${this.idade} anos.`;
    }
}

// Classe Cachorro que herda de Animal
class Cachorro extends Animal {
    emitirSom() {
        return "Woof!";
    }
}

// Classe Gato que herda de Animal
class Gato extends Animal {
    emitirSom() {
        return "Meow!";
    }
}


const dog1 = new Cachorro("Rex", 5);
const dog2 = new Cachorro("Fido", 3);
const cat1 = new Gato("Mimi", 2);


console.log(dog1.descrever()); // Rex tem 5 anos.
console.log(dog1.emitirSom()); 

console.log(dog2.descrever()); // Fido tem 3 anos.
console.log(dog2.emitirSom()); 

console.log(cat1.descrever()); // Mimi tem 2 anos.
console.log(cat1.emitirSom()); 
