/* bandeira 
BANDEIRA Numero inicial

Visa - Começa com 4
Mastercard - Começa com digitos entre 51 e 55, ou 2221-2720
Elo - Pode começar com 4011,4312,4389 entre outros.
American Express - Começa com 34 ou 37
Discover - Começa com 6011, 65 ou 644-649 
Hipercard - geralmente começa com 6062
*/
const prompt = require('prompt-sync')();

const bandeira = prompt('Digite o número do cartão: ');


function verificarBandeira(numero) {
    const regexes = {
        'Visa': /^4/,
        'Mastercard': /^(5[1-5]|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7([01]\d|20)))/,
        'Elo': /^(4011|4312|4389|4576|5041|5066|5090|6277|6362|6363)/,
        'American Express': /^3[47]/,
        'Discover': /^(6011|65|64[4-9])/,
        'Hipercard': /^6062/
    };

    for (const [bandeira, regex] of Object.entries(regexes)) {
        if (regex.test(numero)) {
            return bandeira;
        }
    }
    return 'Bandeira desconhecida';
}

const resultado = verificarBandeira(bandeira);
console.log(`A bandeira do cartão é: ${resultado}`);

