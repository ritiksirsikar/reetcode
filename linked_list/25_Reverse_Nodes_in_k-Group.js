class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1, 2, 3, 4, 5];
let k = 2;

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

function reversenodes_in_kgroup(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupTail = dummy;
    let current = head;
    let count = 0;

    while (current) {
        count++;

        if (count % k === 0) {
            prevGroupTail = reverseGroup(prevGroupTail, current.next);
            current = prevGroupTail.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
}

function reverseGroup(prevGroupTail, nextGroupHead) {
    let prev = prevGroupTail.next;
    let current = prev.next;

    while (current !== nextGroupHead) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    const groupHead = prevGroupTail.next;
    prevGroupTail.next.next = nextGroupHead;
    prevGroupTail.next = prev;

    return groupHead;
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

console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));

head = [1,2,3,4,5], k = 5
console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));

head = [1,2,3,4,5], k = 3
console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));

head = [], k = 3
console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));

head = [1,2,3], k = 3
console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));

head = [1,2,3,4,5], k = 0
console.log(finalOutput(reversenodes_in_kgroup(formLinkedList(head), k)));
