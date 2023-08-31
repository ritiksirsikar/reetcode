class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1,2,3,4,5]; 
let left = 2;
let right = 4

function formLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    var head = new ListNode(arr[0]);
    var current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function reverseLinkedList(head, left, right) {
  let dummy = new ListNode(0, head);
  let previous = dummy;
  let current = head;

  for(let i = 0; i < left - 1; i++){
    previous = current;
    current = current.next;
  }

  let prev = null;
  for(let i = 0; i < right - left + 1; i++){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  previous.next.next = current;
  previous.next = prev;

  return dummy.next;
};



// Collect the result values in an array
function finalOutput(result) {
    let resultArray = [];
    let currentNode = result;
    while (currentNode) {
        resultArray.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return resultArray;
}

console.log(finalOutput(reverseLinkedList(formLinkedList(head), left, right)));

head = [1,4,3,2,5,2];
left = 1;
right = 3;
console.log(finalOutput(reverseLinkedList(formLinkedList(head), left, right)));

head = [5];
left = 1;
right = 1;
console.log(finalOutput(reverseLinkedList(formLinkedList(head), left, right)));

head = [1,1,2,2,3,3,4,5,6,6];
left = 2;
right = 3
console.log(finalOutput(reverseLinkedList(formLinkedList(head), left, right)));
