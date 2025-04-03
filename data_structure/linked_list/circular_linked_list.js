// class Node {
//   constructor(newVal) {
//     this.data = newVal;
//     this.next = null;
//   }
// }

// class CircularLinkedLIst {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.head.next = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next !== this.head) {
//       current = current.next;
//     }

//     current.next = newNode;
//     newNode.next = this.head; // OR --> current.next.next = this.head;
//   }

//   deleteByValue = (value) => {
//     if (!this.head) return; // Empty list

//     let current = this.head;
//     let prev = null;

//     // Case 1: If head node is to be deleted
//     if (current.data === value) {
//       if (current.next === this.head) {
//         // Only one node in the list
//         this.head = null;
//         return;
//       }
//       // Find last node to update its `next` pointer
//       while (current.next !== this.head) {
//         current = current.next;
//       }
//       current.next = this.head.next; // Last node should point to new head
//       this.head = this.head.next;
//       return;
//     }

//     // Case 2: Deleting a node that is not the head
//     prev = this.head;
//     current = this.head.next;

//     while (current !== this.head) {
//       if (current.data === value) {
//         prev.next = current.next; // Skip the node to delete
//         return;
//       }
//       prev = current;
//       current = current.next;
//     }
//   };

//   print() {
//     console.log("output ", this.head);
//   }

//   printList() {
//     if (!this.head) {
//       console.log("List is empty");
//       return;
//     }
//     let current = this.head;
//     let result = [];
//     do {
//       result.push(current.data);
//       current = current.next;
//     } while (current !== this.head);
//     console.log("Circular Linked List:", result.join(" → "));
//   }
// }

// const list = new CircularLinkedLIst();
// list.append(5);
// list.append(6);
// list.append(7);
// list.append(8);

// list.deleteByValue(52);

// console.log("_________________");
// list.print();
// list.printList();

// --------------------- Using tail pointer ---------------
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
      this.tail.next = this.head; // Circular link
    } else {
      newNode.next = this.head;
      this.head = newNode; // Move head to the new node
      this.tail.next = this.head; // Maintain circular connection
    }
    this.size++;
  }

  deleteEndNode() {
    if (this.isEmpty()) {
      return;
    }
    let current = this.head;
    while (current.next.next !== this.head) {
      current = current.next;
    }
    current.next = this.head;
    this.tail = current;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    console.log("head --->", this.head);
    console.log("tail ---->", this.tail);
    console.log("size ---->", this.size);
  }
}

const list = new LinkedList();

list.append(2);
list.append(3);
list.prepend(1);
list.deleteEndNode();

list.print();
