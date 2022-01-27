class CreateNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.start = null

    }

    insert(val) {
        this.length++
            let node = new CreateNode(val)
        if (this.start === null) {
            this.start = node
            return node
        }
        let current = this.start
        while (current.next) {
            current = current.next
        }
        current.next = node
        return node
    }

    insertPosition(val, position) {
        let previousNode = null;
        let prevNode = null;
        let current = this.start

        for (let i = 0; i < position; i++) {
            if (i > 0) {
                prevNode = previousNode
            }
            previousNode = current
            current = current.next

        }
        if (position === 0) {
            let node = new CreateNode(val)
            this.length++;
            node.next = current
            this.start = node

            return node
        }
        if (position > 1) {
            let node = new CreateNode(val)
            this.length++;
            node.next = previousNode
            prevNode.next = node
            return node
        } else {
            let node = new CreateNode(val)
            this.start = node
            node.next = previousNode

        }



    }



    print() {
        let current = this.start;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();

// linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insert(3);
// linkedList.insert(4);
// linkedList.insert(5);
// linkedList.insertPosition(44, 1)
// linkedList.insert(6);
// linkedList.insert(7);
// linkedList.print()
debugger
class DoubleCreateNode extends CreateNode {
    constructor(value) {
        super(value)
        this.prev = null

    }

}

class DoubleLinkList extends LinkedList {
    constructor() {
        super()
    }
    insert(value) {
        this.length++
            let node = new DoubleCreateNode(value)
        if (this.start === null) {
            this.start = node
            return node
        }
        let current = this.start;

        while (current.next) {

            current = current.next
        }
        current.next = node
        node.prev = current

        return node
    }

    insertPosition(val, position) {
        let previousNode = null;
        let prevNode = null;
        let current = this.start

        if (this.start === null) {
            let node = new DoubleCreateNode(val)
            this.start = node
            return node
        }

        for (let i = 0; i < position; i++) {
            if (i > 0) {
                prevNode = previousNode
            }

            previousNode = current
            current = current.next



        }


        if (position > 1) {
            let node = new CreateNode(val)
            this.length++;

            node.next = previousNode
            prevNode.next = node
            node.prev = prevNode
            return node
        } else {
            let node = new CreateNode(val)
            this.start = node
            node.next = previousNode

        }



    }

}


let abc = new DoubleLinkList()
abc.insert(1)
abc.insert(2)
abc.insert(3)
abc.insert(4)
abc.insert(5)
abc.insert(6)
abc.insertPosition(44, 1)
abc.insertPosition(45, 5)
abc.insertPosition(46, 3)
abc.insertPosition(47, 7)

abc.print()