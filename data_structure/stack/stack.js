class Stack {
  constructor(size) {
    this.item = [];
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.warn("Stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize === 0) {
      console.warn("Stack is empty");
    } else {
      this.item.length = this.currentSize - 1;
      this.currentSize--;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.item[0];
  }

  isEmpty() {
    return this.currentSize === 0;
  }

  size() {
    return this.currentSize;
  }

  print() {
    console.log(this.item);
  }
}

const stack1 = new Stack(5);
stack1.push(2);
j;
stack1.push(4);
stack1.push(3);

stack1.pop();

stack1.print();
console.log("stack size is", stack1.size());
console.log("top ele", stack1.peek());
