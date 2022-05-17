// Exercício 1 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
};

console.log("Bem vinda, " + info.personagem + "!")

// Exercício 3


for (let values in info) {
    console.log(values)
}

// Exercício 4

for (let values in info) {
    console.log(info[values])
}


// Exercício 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics 178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};


for (let values in info) {
    if (
        values === 'recorrente' &&
        info[values] === 'Sim' &&
        info2[values] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[values] + ' e ' + info2[values]);
    }
}




// Exercício 6 e 7



let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
        {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
        },
    ],
};


console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)
console.log("O segundo livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[1].titulo)

// Exercício 8

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")






