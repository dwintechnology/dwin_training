// stack implementation
class myStack{
    constructor(){
        let array = [];
        this.array = array;
    }
    push(x){
        this.array.push(x);
        return x;
    }
    pop(){
        let temp = this.array[this.array.length - 1]
        this.array.pop();
        return temp
    }
    top(){
        return this.array[this.array.length - 1]
    }
}

// linked list implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addToTheEnd(value) {
        let node = new Node(value); 
        if (this.length === 0) {
            this.head = node; 
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }  
            current.next = new Node(value);
        }
        this.length++;
    }
    addtInPosition(position, value) {
        if (position < 0 || position > this.length) { 
            return 'Incorrect value of position';
        }
        let node = new Node(value); // creates the node using class Node
        if (position === 0) { 
            node.next = this.head; 
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;
            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = node;
            node.next = current;
        }
        this.length++;
    }
    removeFromPosition(position) {
        if (position < 0 || position > this.length) { 
            return 'Incorrect value of position';
        }
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;
    
            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next; 
        }
        this.length--;
        return current.value;
    }
}