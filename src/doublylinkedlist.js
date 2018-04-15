class DoublyLinkedList{
  constructor(){
    this.head = null; 
    this.tail = null; 
    this.size = 0; 
  }

  addToHead(val){
    if (this.size === 0){
      this.head = this.tail = new DoublyLinkedListNode(val); 
      this.size++;
    } else {
      var temp = this.head; 
      var newHead = new DoublyLinkedListNode(val);
      temp.prev = newHead; 
      newHead.next = temp; 
      this.head = newHead; 
      this.size++; 
    }
  }

  addToTail(val){
    if (this.size === 0){
      this.head = this.tail = new DoublyLinkedListNode(val); 
      this.size++; 
    } else {
      var temp = this.tail; 
      var newTail = new DoublyLinkedListNode(val); 
      temp.next = newTail;
      newTail.prev = temp; 
      this.tail = newTail; 
    }
  }

  removeHead(){
    if (this.size === 0){
      return null; 
    } else {
      var nextHead = this.head.next; 
      nextHead.prev = null; 
      this.head = newHead; 
      this.size--; 
    }
  }

  removeTail(){
    if (this.size === 0){
      return null; 
    } else {
      var newTail = this.tail.prev; 
      newTail.next = null; 
      this.tail = newTail; 
      this.size--; 
    }
  }

  contains(target){
    if (this.size === 0){
      return false; 
    } else if (this.size === 1){
      return this.head.val === target
    } else {
      if (this.size % 2 ==== 1){
        let frontRunner = this.head; 
        let backRunner = this.tail; 
        while (!((frontRunner.val === backRunner.val) && (frontRunner.next === backRunner.next) && (frontRunner.prev === backRunner.prev))){
          if (frontRunner.val === target){
            return true; 
          } else if (backRunner.val === target){
            return true; 
          } else {
            frontRunner = frontRunner.next;
            backRunner = backRunner.prev; 
          }
        }
      } else {
        let frontRunner = this.head; 
        let backRunner = this.tail; 
        while (!(frontRunner.prev === backRunner)){
          if (frontRunner.val === target){
            return true; 
          } else if (backRunner.val === target){
            return true; 
          } else {
            frontRunner = frontRunner.next; 
            backRunner = backRunner.prev; 
          }
        }
      }
    }
  }
}

class DoublyLinkedListNode(val){
  constructor(){
    this.val = val; 
    this.prev = null; 
    this.next = null; 
  } 
}