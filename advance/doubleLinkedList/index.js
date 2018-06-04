class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(data) {
        var node = new Node(data);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        }

        else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.size++;
    }


}

const list = new DoubleLinkedList();
list.add(new Node(1));
list.add(new Node(2));
list.add(new Node(3));
console.log(list);