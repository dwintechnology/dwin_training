class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    push(value) {
        let newNode = new BinarySearchTree(root);

    }
};
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    push(value) {
        if (!this.root) {
            const node = new Node(value)
            this.root = node
            return
        }
        function recPush(currentNode) {
            if (value > currentNode.value) {
                if (currentNode.right == null) {
                    let newNode = new Node(value);
                    currentNode.right = newNode; return
                }
                recPush(currentNode.right);
                return;
            }
            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    let newNode = new Node(value);
                    currentNode.left = newNode; return
                }
                recPush(currentNode.left);
                return;
            }
        }
        recPush(this.root)
    }
};
const BST = new BinarySearchTree();
BST.push(10);
BST.push(18);
BST.push(14);
BST.push(5);
BST.push(6);
BST.push(12);
BST.push(8);
console.log(BST);



