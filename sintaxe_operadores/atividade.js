function CompararFrase(num1,num2){
    const primeiraFrase = Frase1(num1,num2);
    const segundaFrase = Frase2(num1,num2);
    
    return `${primeiraFrase} ${segundaFrase}`;
}

function Frase1(num1,num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = `não`;

    if(num1 == num2){
        simNao = ``;
    }

    return `${primeiraFrase} ${simNao} são iguais`;
}

function Frase2(num1,num2) {
    const soma = num1 + num2;
    let compararMenor = `menor`;
    let compararMaior = `menor`;

    if(soma > 10) {
        compararMenor = `maior`;
    }

    if(soma > 20) {
        compararMaior = `maior`;
    }

    return `Sua soma é ${soma}, que é ${compararMenor} do que 10 e ${compararMaior} do que 20`;
}

console.log(CompararFrase(5, 8));