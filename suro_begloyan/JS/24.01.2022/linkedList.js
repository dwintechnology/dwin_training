class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    //veradarcnum e tox darcvac mer yntacik elementy
    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        //skizb u verj
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        //mer verjy havasar e mer sarqac newNode-in
        this.tail.next = newNode;
        this.tail = newNode;
        // veradardznum e mer yntacik cucaky
        return this;
    }
}
// const list = new LinkedList();
// list.append('a').append('b').append('c');
// console.log(JSON.stringify(list));

class DoubleLinkedList extends LinkedList{
    constructor() {
        super();
    }
}
const doubleList = new DoubleLinkedList();