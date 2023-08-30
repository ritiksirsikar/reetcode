class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = [1, 2, 3, 4];

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

function swap_nodes_in_pair(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while(curr && curr.next){
        let secondPair = curr.next.next;
        let second = curr.next;

        second.next = curr;
        curr.next = secondPair;
        prev.next = second;

        prev = curr;
        curr = prev.next;
    }
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

console.log(finalOutput(swap_nodes_in_pair(formLinkedList(head))));

head = []
console.log(finalOutput(swap_nodes_in_pair(formLinkedList(head))));

head = [1]
console.log(finalOutput(swap_nodes_in_pair(formLinkedList(head))));

head = [1,2,3,4,5,6,7,8,9,10] //Even Count
console.log(finalOutput(swap_nodes_in_pair(formLinkedList(head))));

head = [1,2,3,4,5,6,7,8,9,10,11] //Odd count
console.log(finalOutput(swap_nodes_in_pair(formLinkedList(head))));
