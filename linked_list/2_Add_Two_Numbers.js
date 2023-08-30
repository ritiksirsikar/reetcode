class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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

function linkedListAddition(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry > 0) {
        let v1 = 0;
        let v2 = 0;
        if (l1) {
            v1 = l1.data;
            l1 = l1.next;
        }
        if (l2) {
            v2 = l2.data;
            l2 = l2.next;
        }
        let value = v1 + v2 + carry;
        carry = Math.floor(value / 10);
        value = value % 10;
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];


// Collect the result values in an array
function finalOutput(result){
    let resultArray = [];
    let currentNode = result;
    while(currentNode){
        resultArray.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return resultArray
}
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [1]
l2 = [1,2,3]
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [0, 1]
l2 = [];
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [0, 0]
l2 = [9,9,9]
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [] 
l2 = []
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [0] 
l2 = [0]
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = []
l2 = [8, 9, 8]
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));
// Testcase
l1 = [9,5,1]
l2 = [9,1,2,3,4,5,6,7,8,4,5,6];
console.log(finalOutput(linkedListAddition(formLinkedList(l1), formLinkedList(l2))));