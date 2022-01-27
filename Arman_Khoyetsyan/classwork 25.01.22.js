// class Node {
//     constructor(value) {
//         this.left = null;
//         this.right = null;
//         this.value = value
//     }
// }
// class Tree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         var newNode = new Node(value)
//         if (this.root === null) {
//             this.root = newNode
//             return
//         }

//         function recPush(current) {
//             if (newNode.value < current.value) {
//                 if (current.left === null) {
//                     current.left = newNode;
//                     return
//                 }
//                 recPush(current.left)

//             } else {
//                 if (current.right === null) {
//                     current.right = newNode;
//                     return

//                 }
//                 recPush(current.right)

//             }
//         }

//         recPush(this.root)

//     }
//     nodeDel(val) {

//     }
// }

// let tree = new Tree()
// tree.insert(20)
// tree.insert(9)
// tree.insert(8)
// tree.insert(50)
// tree.insert(86)
// tree.insert(21)