const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];
    for (let i = 0; i < expr.length; i += 10) {
        symbols.push(expr.substring(i, i + 10));
    }

    let morse = [];
    for (let i = 0; i < symbols.length; i++) {
        morse[i] = symbols[i]
            .replace(/10/g, '.')
            .replace(/11/g, '-')
            .replace(/0/g, '');
            // ;
    }

    let result = '';
    for (let i = 0; i < morse.length; i++) {
        if (morse[i] === '**********') {
            result += ' ';
            i++;
        }
        result += MORSE_TABLE[morse[i]];
    }

    return result;
}

module.exports = {
    decode
}
