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

    unshift(val) {
        const new_node = new Node(val)

        if (!this.head) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;

            this.head = new_node;
        }

        this.length++;
    
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return null;

        let counter = 0;
        let current_node = this.head;

        while(counter !== index) {
            current_node = current_node.next;
            counter++;
        } 

        return current_node;
    }

    set(val, index) {
        const found_node = this.get(index);

        if (found_node) {
            found_node.val = val;
            
            return true;
        }

        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}


const list = new Singly_Linked_List()

list.push('Hello')
list.push('Goodbye')
list.push('!')