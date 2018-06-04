class Tree {
    constructor() {
        this.root = null;
    }

    traverseBFS(cb) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            cb(node);
        }
    }

    traverseDFS(cb) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            cb(node);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        var data = new Node(data)
        this.children.push(data);
    }

    removeData(data) {
        this.children = this.children.filter((nodeData) => {
            return nodeData.data !== data
        })
    }
}

let tree = new Tree();
tree.root = new Node(1);
tree.root.add(2);
tree.root.add(3);

tree.root.children[0].add(7);
tree.root.children[0].add(8);
tree.root.children[1].add(5);
tree.root.children[1].add(6);
tree.root.children[0].children[0].add(11);
tree.root.children[0].children[0].add(12);
tree.traverseDFS((data) => {
    console.log(data);
});



