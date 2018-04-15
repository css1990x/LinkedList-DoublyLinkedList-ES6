class LinkedList {
  constructor(){
    this.head = null; 
    this.tail = null; 
    this.size = 0; 
  }

  addToHead(val){
    if (!this.head && !this.tail){
      this.head = this.tail = new LinkedListNode(val); 
    } else if (this.head && this.tail && (this.head === this.tail)){
      var head = new LinkedListNode(val); 
      this.head = head; 
      this.head.next = this.tail; 
    } else {
      head = new LinkedListNode(val);
      var oldHead = this.head; 
      head.next = temp; 
      this.head = head; 
    }
  }
  
  addToTail(val){
    var newTail = new LinkedListNode(val); 
    if (!this.head && !this.tail){
      this.head = this.tail = newTail; 
    } else if (this.head && this.tail && (this.head === this.tail)){
      this.head.next = this.tail; 
      this.tail = newTail; 
    } else {
      var oldTail = this.tail; 
      oldTail.next = newTail;
      this.tail = newTail; 
    }
  }

  removeHead(){
    var currentHead = this.head; 
    if (!this.head){
      return null; 
    }
    if (currentHead === this.tail){
      this.head = null; 
      this.tail = null; 
    } else {
      this.head = this.head.next; 
    } 
    return currentHead ? currentHead.val : null; 
  }


  removeTail(){
    var currentNode = this.head; 
    while (currentNode.next !== this.tail){
      currentNode = currentNode.next; 
    }
    currentNode.next = null; 
    this.tail = currentNode; 
  }

  contains(target){
    var currentNode = this.head; 
    while (currentNode) {
      if (currentNode.val === target){
        return true; 
      } else {
        currentNode = currentNode.next; 
      }
    }
    return false; 
  }
}

class LinkedListNode(val) {
  constructor(){
    this.val = val; 
    this.next = next; 
  }
}