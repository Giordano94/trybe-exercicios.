

// Questão 01
const testingScope = (escopo) => {
    if (escopo === true) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope)
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

