function addBinary(a, b) {
    let result = a + b;
    let binary = '';

    if (result === 0) {
        return 0;
    }

    while (result >= 1) {
        let appender = Number.parseInt(result % 2);
        result = Number.parseInt(result / 2);
        binary += appender
    }


    binary = binary.split('').reverse().join('');
    return binary;
}

console.log(addBinary(0, 0), "0");
console.log(addBinary(0, 1), "1");
console.log(addBinary(1, 0), "1");
console.log(addBinary(1, 1), "10");
console.log(addBinary(2, 2), "100");
console.log(addBinary(51, 12), "111111");
console.log(addBinary(99, 101), "11001000");
console.log(addBinary(4096, 1), "1000000000001");

