const Node = require('./node');


class LinkedList {


    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
 
    if (this.length) {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
    } else {
        this._head = node;
        this._tail = node;
    }
 
 
    this.length++;
 
    return this;
    }

    head() {
    	return this._head.data;
    }

    tail() {
    	return this._tail.data;
    }

    at(index) {
    	var current = this._tail;
    	var indx = this.length - 1;
    	while (current !== null) {
    		if (index === indx) return current.data;
    		current = current.prev;
    		indx--;
    	}
    return;
    }

    insertAt(index, data) {
    	var current = this._tail;
    	var indx = this.length - 1;
    	while (current !== null) {
    		if (index == indx) {
    			current.data = data;
    		}
    		current = current.prev;
    		indx--;
    	}

    	return this;
    
    }

    isEmpty() {
    	return this.length === 0;
    }

    clear() {
    	this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {    	
    	var elem = this.at(index);

    	var current = this._head; 
 		while(current.data !== elem) 
 		{
			 current = current.next; 
			 if(current === null)
			 return this; 
		}
 		if(current===this._head) 
 			this._head= current.next; 
 		else
		 current.prev.next = current.next;
		 if(current==this._tail) 
		 this._tail = current.prev; 
		 else
		 current.next.prev = current.prev;

		this.length--;
		return this;

    }

    reverse() {
    	var left = this._head; 
        var right = this._tail;

        while (true) {
            if (left == right) {
                return;
            }

            var tmp = left.data;
            left.data = right.data;
            right.data = tmp;

            if (left.next == right) {
                return;
            }

            left = left.next;
            right = right.prev;
        }
        return this;
    }

    indexOf(data) {
   		var current = this._head;
   		var index = 0;

   		while (current!==null) {
   			if (current.data === data) { 
   				return index;
   			}
   			current = current.next;
   			index++;
   		}
   		return -1;
    }
}

module.exports = LinkedList;
