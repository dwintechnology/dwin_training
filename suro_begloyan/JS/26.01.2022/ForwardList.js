class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    size_of_list() {
        console.log(this.size);
    }
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
class ForwardNode {
    constructor(element) {
        this.element = element;
        this.next = null
        this.prev = null
    }
}
class ForwardList extends LinkedList {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addStart(element) {
        let forwardNode = new ForwardNode(element);
        if (this.head == null) {
            this.head = forwardNode;
            this.tail = forwardNode;
        } else {
            forwardNode.next = this.head;
            this.head.prev = forwardNode;
            this.head = forwardNode;
        }
        this.size++;
    }
    addEnd(element) {
        if (this.head == null) {
            addStart(element);
        } else {
            let forwardNode = new ForwardNode(element);
            forwardNode.prev = this.tail;
            this.tail.next = forwardNode;
            this.tail = forwardNode;
            this.size++;
        }
    }
reverse() {
    let temp = null;
    let current = this.head;
    while (current != null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }
    if (temp != null) {
        this.head = temp.prev;
    }
}
}
const forwardList = new ForwardList();