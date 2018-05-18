// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter((nodeData) => {
            return nodeData.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}
const tree = new Tree();
tree.root = new Node(1);
tree.root.add(2);
tree.root.add(3);
tree.root.children[1].add(5);
tree.root.children[1].add(6);
tree.root.children[0].add(7);
tree.root.children[0].add(8);
tree.root.children[1].children[1].add(4);

console.log(tree);

tree.traverseBF((number) => {
    console.log(number.data);
})


console.log('----------------');

tree.traverseDF((number) => {
    console.log(number.data);
})

module.exports = { Tree, Node };