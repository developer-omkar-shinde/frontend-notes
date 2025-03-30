//Binary search tree

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  makeTree = (root, newNode) => {
    if (newNode.value < root.value) {
      if (root.left) {
        this.makeTree(root.left, newNode);
      } else {
        root.left = newNode;
      }
    } else {
      if (root.right) {
        this.makeTree(root.right, newNode);
      } else {
        root.right = newNode;
      }
    }
  };

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.makeTree(this.root, newNode);
    }
  }

  searchRecurtion = (root, val) => {
    if (root === null) {
      return false;
    } else if (val === root.value) {
      return true;
    } else if (val < root.value) {
      return this.searchRecurtion(root.left, val);
    } else {
      return this.searchRecurtion(root.right, val);
    }
  };

  search(val) {
    if (!this.root) return null;
    const res = this.searchRecurtion(this.root, val);
  }

  inOrderTravers = (root) => {
    if (root) {
      this.inOrderTravers(root.left);
      console.log("val", root.value);
      this.inOrderTravers(root.right);
    }
  };

  breadthFirstTraversing = () => {
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  };

  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  deleteNode = (root, value) => {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  };

  print() {
    console.log(this.root);
  }
}

const tree = new Tree();

tree.insert(4);
tree.insert(3);
tree.insert(6);
tree.insert(7);
tree.insert(2);
tree.insert(5);

tree.search(6);
// tree.inOrderTravers(tree.root);
// tree.breadthFirstTraversing();

// console.log(tree.minValue(tree.root));
// console.log(tree.maxValue(tree.root));
tree.deleteNode(tree.root, 6);
tree.print();
