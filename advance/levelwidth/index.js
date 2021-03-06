// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');


function levelWidth(root) {
    const counterArr = [0];
    const arr = [root, 's'];

    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            counterArr.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counterArr[counterArr.length - 1]++;
        }
    }

    return counterArr;
}

const root = new Node(0);
root.add(1);
root.children[0].add(2);
root.children[0].add(3);
root.children[0].children[0].add(4);
console.log(levelWidth(root));


module.exports = levelWidth;