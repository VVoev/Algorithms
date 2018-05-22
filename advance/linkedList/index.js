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
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    forEach(fn) {
        let counter = 0;
        let node = this.head;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
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

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        last ? last.next = new Node(data) : this.head = new Node(data);
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    reverse() {
        var curr = this.head;
        var next = null;
        var prev = null;

        while (curr) {
            next = curr.next; //2 3 null

            curr.next = prev; //null 1 2

            prev = curr; //1 2 3

            curr = next; //2
        }
        this.head = prev;
    }


}

const l = new LinkedList();

l.insertLast(1);
l.insertLast(2);
l.insertLast(3);

l.reverse();
console.log(l);

module.exports = { Node, LinkedList };