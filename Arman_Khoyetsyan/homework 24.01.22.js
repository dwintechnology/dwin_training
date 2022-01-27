// function createNode(value) {
//     return {
//         value: value,
//         next: null,
//     };
// }

// class LinkedList {
//     constructor() {
//         this.length = 0
//         this.start = null

//     }

//     insert(val) {
//         this.length++
//             let node = createNode(val)
//         if (this.start === null) {
//             this.start = node
//             return node
//         }
//         let current = this.start
//         while (current.next) {
//             current = current.next
//         }
//         current.next = node
//         return node
//     }

//     insertPosition(val, position) {
//         let previousNode = null;
//         let current = this.start

//         for (let i = 0; i < position; i++) {
//             previousNode = current
//             current = current.next

//         }
//         if (position === 0) {
//             let node = createNode(val)
//             this.length++;
//             node.next = current
//             this.start = node

//             return node
//         }
//         let node = createNode(val)
//         this.length++;
//         node.next = current
//         current = node
//         return node
//     }



//     print() {
//         let current = this.start;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

// }

// const linkedList = new LinkedList();

// linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insert(3);
// linkedList.insert(4);
// linkedList.insert(5);
// linkedList.insertPosition(44, 2)
// linkedList.insert(6);
// linkedList.insert(7);
// linkedList.print()