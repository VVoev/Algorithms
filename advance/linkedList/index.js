// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.counter2 = 0;
    }


    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let counter = 0;
        let node = this.head;

        if (!this.head) {
            return null;
        }

        while (node) {
            counter++;
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;

    }


}

const l = new LinkedList();
l.insertFirst('a');
l.removeFirst();



module.exports = { Node, LinkedList };