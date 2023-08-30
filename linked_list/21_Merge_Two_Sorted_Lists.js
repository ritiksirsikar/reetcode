class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

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

function merge_two_sorted_list(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }
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
console.log(finalOutput(merge_two_sorted_list(formLinkedList(list1), formLinkedList(list2))));

list1 = [], list2 = []
console.log(finalOutput(merge_two_sorted_list(formLinkedList(list1), formLinkedList(list2))));

list1 = [], list2 = [0]
console.log(finalOutput(merge_two_sorted_list(formLinkedList(list1), formLinkedList(list2))));

list1 = [-1], list2 = [0]
console.log(finalOutput(merge_two_sorted_list(formLinkedList(list1), formLinkedList(list2))));