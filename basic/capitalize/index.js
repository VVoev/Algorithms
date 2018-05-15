// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var str = str.split(' ');
    var res = ''
    for (let i of str) {
        res += i.replace(i[0], i[0].toUpperCase()) + ' '
    }
    res = res.trim();
    return res;
}
module.exports = capitalize;