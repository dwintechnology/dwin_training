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
//     nodeDel(value) {
//         if (this.root == null) {
//             return null;
//         }

//         let rightBranch;

//         function foo(current) {

//             if (value == current.value) {
//                 rightBranch = current.right;
//                 if (current.left !== null) {
//                     current.value = current.left.value;
//                 } else {
//                     if (current.right !== null) {
//                         current.value = current.right.value;
//                         current.right = current.right.right;
//                         return
//                     } else {
//                         delete current.left;
//                         delete current.right;
//                         delete current.value

//                         return
//                     }

//                 }

//                 if (current.right !== null) {
//                     current.right = current.left.right;
//                 }
//                 if (current.left !== null) {
//                     current.left = current.left.left;
//                 }

//                 function foo2(current) {
//                     if (current.right == null) {
//                         current.right = rightBranch
//                         return
//                     }
//                     return foo2(current.right)
//                 }
//                 return foo2(current)
//             }
//             if (value < current.value) {
//                 foo(current.left)
//             }
//             if (value > current.value) {
//                 foo(current.right)
//             }
//         }
//         return foo(this.root)
//     }
// }

// let tree = new Tree()
// tree.insert(100)
// tree.insert(9)
// tree.insert(8)
// tree.insert(50)
// tree.insert(86)
// tree.insert(21)
// tree.insert(150)
// tree.insert(140)
// tree.insert(145)
// tree.insert(160)
// tree.insert(155)
// tree.nodeDel(9)