class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1,2,3,4,5]; 
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

    function rotate_list(head, k) {
    if(!head){
        return head;
    }
    let length = 1;
    let tail = head;
    while(tail.next !== null){
        tail = tail.next;
        length++;
    }

    k = k % length;
    if(k == 0){
        return head
    }

    let cur = head;
    for(let i = 0; i < length - k - 1; i++){
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    tail.next = head;
    return newHead;
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
console.log(finalOutput(rotate_list(formLinkedList(head), k)));

head = [1,2,3,4,5], k = 3
console.log(finalOutput(rotate_list(formLinkedList(head), k)));

head = [1,2,3,4,5,6,7,8,9], k = 4
console.log(finalOutput(rotate_list(formLinkedList(head), k)));

head = [], k = 3
console.log(finalOutput(rotate_list(formLinkedList(head), k)));

head = [1,2,3], k = 3
console.log(finalOutput(rotate_list(formLinkedList(head), k)));

head = [1,2,3,4,5], k = 0
console.log(finalOutput(rotate_list(formLinkedList(head), k)));
