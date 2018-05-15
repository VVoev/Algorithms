
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let index = 0; index < n; index++) {
        const spacesIndex = n - index - 1;
        let hashesIndex = 1;
        const spaces = " ".repeat(spacesIndex)
        index == 0 ? hashesIndex = 1 : hashesIndex += index * 2
        const hashes = "#".repeat(hashesIndex);
        const line = spaces + hashes + spaces;

        console.log(line);
    }
}

pyramid(5);

module.exports = pyramid;