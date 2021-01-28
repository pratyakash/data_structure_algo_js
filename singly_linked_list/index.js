class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Singly_Linked_List {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const new_node = new Node(val);

        if (!this.head) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }

        this.length++;
        return this; 
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        else {
            let current = this.head;
            let new_tail = current;

            while(current.next) {
                new_tail = current;
                current = current.next;
            }

            this.tail = new_tail;
            this.tail.next = null;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }

            return current;
        }
    }

    shift() {
        if (!this.head) return undefined;

        const current_head = this.head;
        
        this.head = current_head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return current_head;
    }
}


const list = new Singly_Linked_List()

list.push('Hello')
list.push('Goodbye')
list.push('!')

console.log(list.pop())