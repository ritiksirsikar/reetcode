class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let arr = [1,2,3,4,5];
let n = 2;

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

function removeNthNode(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let left = dummy;
    let right = head;

    // Move the right pointer n steps ahead
    while (n > 0 && right) {
        right = right.next;
        n--;
    }

    // Move both pointers until right reaches the end
    while (right) {
        right = right.next;
        left = left.next;
    }

    // Remove the nth node from the end
    left.next = left.next.next;
    return dummy.next;
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


console.log(finalOutput(removeNthNode(formLinkedList(arr), n)));

arr = [1], n = 1
console.log(finalOutput(removeNthNode(formLinkedList(arr), n)));

arr = [1,2], n = 1
console.log(finalOutput(removeNthNode(formLinkedList(arr), n)));

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], n = arr.length
console.log(finalOutput(removeNthNode(formLinkedList(arr), n)));