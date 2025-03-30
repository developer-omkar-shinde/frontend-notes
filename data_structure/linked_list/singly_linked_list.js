class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  insertAtEnd(newNodeValue) {
    const newNode = new Node(newNodeValue);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let i = this.head;

    while (i.next !== null) {
      i = i.next;
    }

    i.next = newNode;
  }
  //  Delete a node by index
  deleteNodeAt(index) {
    if (!this.head) return; // Empty list case

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let i = 0;
    let lead = this.head;

    while (i < index - 1 && lead.next !== null) {
      lead = lead.next;
      i++;
    }

    if (lead.next !== null) {
      lead.next = lead.next.next;
    }
  }

  insertNodeAt(index, value) {
    if (!this.head) return;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let i = 1;
    let lead = this.head;
    let temp = null;
    while (i < index && lead.next !== null) {
      lead = lead.next;
      i++;
    }
    temp = lead.next;
    lead.next = newNode;
    lead.next.next = temp;
  }

  insertAtStart(newNodeValue) {
    const newNode = new Node(newNodeValue);
    newNode.next = this.head; // Point new node to old head
    this.head = newNode; // Update head
  }

  display() {
    console.log(JSON.stringify(this.head));
  }
}

searchNode = (value) => {
  let temp = this.head;
  while (temp !== null) {
    if (temp.value === value) return true;
    temp = temp.next;
  }
  return false;
};

const list = new LinkedList();

list.insertAtEnd(101);
list.insertAtEnd(102);
// list.insertAtEnd(103);
list.insertAtEnd(104);
// list.insertAtStart(100);
list.insertNodeAt(2, 103);

// list.deleteNodeAt(3);

list.display();
