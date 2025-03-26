class Queue {
  constructor(size) {
    this.size = size;
    this.items = [];
  }

  isEmpty() {
    if (this.items.length === 0) {
      console.log("Queue is full");
      return true;
    }
  }

  isFull() {
    if (this.items.length >= this.size) {
      console.log("Queue is full");
      return true;
    }
  }

  enqueue(newItem) {
    if (this.isFull()) {
      console.log("Queue is full");
    } else {
      this.items[this.items.length] = newItem;
    }
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.items.length = this.items.length - 1;
    }
  }

  print() {
    console.log(this.items);
  }
}

const queue1 = new Queue(3);

queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(4);

// queue1.dequeue();
// queue1.dequeue();

queue1.print();
