class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1,4,3,2,5,2]; 
let x = 3;

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

function partition_list(head, x) {
    let left = new ListNode(0);
    let right = new ListNode(0);
    let leftTail = left;
    let rightTail = right;

    while (head) {
        if (head.data < x) {
            leftTail.next = head;
            leftTail = leftTail.next;
        } else {
            rightTail.next = head;
            rightTail = rightTail.next;
        }
        head = head.next;
    }
    leftTail.next = right.next;
    rightTail.next = null;
    return left.next;  
}

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

console.log(finalOutput(partition_list(formLinkedList(head), x)));

head = [1,4,3,2,5,2];
x = 4
console.log(finalOutput(partition_list(formLinkedList(head), x)));

head = [1,1,2,2,3];
x = 2
console.log(finalOutput(partition_list(formLinkedList(head), x)));

head = [1,1,2,2,3,3,4,5,6,6];
x = 2
console.log(finalOutput(partition_list(formLinkedList(head), x)));

head = [0];
x = 1
console.log(finalOutput(partition_list(formLinkedList(head), x)));

head = [2, 1]
x =2
console.log(finalOutput(partition_list(formLinkedList(head), x)));
