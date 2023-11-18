class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1,1,2]

function formLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function deleteDuplicates(head) {
    if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
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

console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [1,1,1,1]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [1,1,2,2,3]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [1,1,2,2,3,3,4,5,6,6]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [0]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = []
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

