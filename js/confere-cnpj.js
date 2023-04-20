export default function cnpjConfirmado(campo) {
    const cnpj = campo.value.replace(/\.|-/g, "");
    if(validandoNumerosRepetidos(cnpj) || validandoPrimeiroDigito(cnpj) || validandoSegundoDigito(cnpj)) {
        campo.setCustomValidty('Esse cnpj não é válido')
    }
}

function validandoNumerosRepetidos(cnpj) {
    const numerosRepetidos = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999'
    ]

    return numerosRepetidos.includes(cnpj);
}

function validandoPrimeiroDigito(cnpj) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cnpj[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 14;

    if (soma == 13 || soma == 1) {
        soma = 0
    }

    return soma != cnpj[9];
}

function validandoSegundoDigito(cnpj) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cnpj[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 14;

    if (soma == 13 || soma == 1) {
        soma = 0
    }

    return soma != cnpj[10];
}