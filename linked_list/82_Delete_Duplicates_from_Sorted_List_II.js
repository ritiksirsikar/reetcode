class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let head = [1,2,3,3,4,4,5,5]; 

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

function deleteDuplicates(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;

    while (head !== null) {
        if (head.next !== null && head.data === head.next.data) {
            // Skip the nodes whose values are equal to head.
            while (head.next !== null && head.data === head.next.data) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            prev = prev.next;
        }
        head = head.next;
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

console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [1,1,1,1]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

head = [1,1,1,2,3]
console.log(finalOutput(deleteDuplicates(formLinkedList(head))));

