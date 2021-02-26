module.exports = function toReadable (number) {
    const numberLessTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tensLessHundred = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let remainder;
    let remainderTens;
    let word = [];

    if (number < 20) {
        word = numberLessTwenty[number];
    } else if (number < 100){
        remainder = number % 10;
        word = tensLessHundred[Math.floor(number / 10)];
        if (remainder) {
            word += ' ' + numberLessTwenty[remainder];
        }
    } else if (number < 1000){
        remainder = number % 100;

        word = numberLessTwenty[Math.floor(number / 100)] + ' hundred ';
        if (remainder === 0) {
            result = word.slice(0,-1);
            return result;
        } else if (remainder < 20) {
            word += '' + numberLessTwenty[remainder]; //'' делают строку из числа
        } else if (remainder < 100){
            remainderTens = remainder % 10;
            word += tensLessHundred[Math.floor(remainder / 10)];
            if (remainderTens) {
                word += ' ' + numberLessTwenty[remainderTens];
            }
        }
    }
    return word;
}
