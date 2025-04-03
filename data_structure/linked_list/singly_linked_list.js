// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = this.head;
//   }

//   insertAtEnd(newNodeValue) {
//     const newNode = new Node(newNodeValue);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let i = this.head;

//     while (i.next !== null) {
//       i = i.next;
//     }

//     i.next = newNode;
//   }
//   //  Delete a node by index
//   deleteNodeAt(index) {
//     if (!this.head) return; // Empty list case

//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let i = 0;
//     let lead = this.head;

//     while (i < index - 1 && lead.next !== null) {
//       lead = lead.next;
//       i++;
//     }

//     if (lead.next !== null) {
//       lead.next = lead.next.next;
//     }
//   }

//   insertNodeAt(index, value) {
//     if (!this.head) return;
//     const newNode = new Node(value);

//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }
//     let i = 1;
//     let lead = this.head;
//     let temp = null;
//     while (i < index && lead.next !== null) {
//       lead = lead.next;
//       i++;
//     }
//     temp = lead.next;
//     lead.next = newNode;
//     lead.next.next = temp;
//   }

//   insertAtStart(newNodeValue) {
//     const newNode = new Node(newNodeValue);
//     newNode.next = this.head; // Point new node to old head
//     this.head = newNode; // Update head
//   }

//   display() {
//     console.log(JSON.stringify(this.head));
//   }
// }

// searchNode = (value) => {
//   let temp = this.head;
//   while (temp !== null) {
//     if (temp.value === value) return true;
//     temp = temp.next;
//   }
//   return false;
// };

// const list = new LinkedList();

// list.insertAtEnd(101);
// list.insertAtEnd(102);
// // list.insertAtEnd(103);
// list.insertAtEnd(104);
// // list.insertAtStart(100);
// list.insertNodeAt(2, 103);

// // list.deleteNodeAt(3);

// list.display();

// // ------------------------------ using tail pointer ------------------------------------

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  insertAtEnd(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  intertAtStart(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.size++;
  }

  deleteEndNode() {
    if (this.isEmpty()) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
    this.size--;
  }

  deleteStartNode() {
    if (this.isEmpty()) return null;
    const deletedValue = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return deletedValue;
  }

  deleteNodeAt(index) {
    if (this.isEmpty() || index >= this.size || index < 0) {
      console.log("invalid index");
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
    } else {
      let i = 0;

      let currentNode = this.head;

      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
      }
      currentNode.next = currentNode.next.next;
    }
    this.size--;
  }

  isEmpty() {
    return !this.head;
  }

  print() {
    console.log("Head--->", this.head);
    console.log("----------------");
    console.log("Tail--->", this.tail);
    console.log("size--->", this.size);
  }
}

const list = new LinkedList();

list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
// list.intertAtStart(0);

// list.deleteEndNode();
list.deleteNodeAt(0);

list.print();
