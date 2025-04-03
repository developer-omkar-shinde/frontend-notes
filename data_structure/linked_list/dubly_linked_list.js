// class Node {
//   constructor(val) {
//     this.prev = null;
//     this.data = val;
//     this.next = null;
//   }
// }

// class DublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   append(newVal) {
//     const newNode = new Node(newVal);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   prepend(newVal) {
//     const newNode = new Node(newVal);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }

//     this.size++;
//   }

//   deleteByIndex(index) {
//     if (!this.head) return;

//     if (index === 0) {
//       this.head = this.head.next;
//       if (this.head) {
//         this.head.prev = null;
//       } else {
//         this.tail = null;
//       }
//       return;
//     }

//     let current = this.head;
//     let i = 0;
//     while (i < index - 1 && current.next) {
//       current = current.next;
//       i++;
//     }

//     if (current.next) {
//       current.next = current.next.next;
//       if (current.next) current.next.prev = current;
//     }

//     this.size--;

//     console.log(current);
//   }

//   print() {
//     console.log("head --->", this.head);
//     console.log("tail --->", this.tail);
//     console.log("size --->", this.size);

//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += current.data + " ⇄ ";
//       current = current.next;
//     }
//     console.log(output + "null");
//   }
// }

// const list = new DublyLinkedList();

// list.append(2);
// list.append(3);
// list.append(4);
// list.prepend(1);

// list.deleteByIndex(2);

// console.log("--------------");

// list.print();

// ----------------------------- Using tail --------------------

class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(parameters) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  append(newVal) {
    const newNode = new Node(newVal);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(newVal) {
    const newNode = new Node(newVal);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  deleteLastNode() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  print() {
    console.log("head--->", this.head);
    console.log("tail--->", this.tail);
    console.log("size--->", this.size);
  }
}

const list = new LinkedList();

list.append(2);
list.prepend(1);
list.append(3);

list.deleteLastNode();

list.print();
