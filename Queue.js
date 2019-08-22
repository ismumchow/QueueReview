function Queue (cap) {
    this._capacity = cap || Infinity;
    this._storage = {}; 
    this._head = 0; 
    this._tail = 0; 
} 


Queue.prototype.enqueue = function (val) {
    if (this.count() < this._capacity) {
        this._storage[this._tail++] = this.val; 
        return this.count(); 
    }
    return "max cap reached";
}


Queue.prototype.dequeue = function (){ 
    var prod = this._storage[this._head]; 
    delete this._storage[this._head]; 
    if (this._head < this._tail) {
        this._head++; 
    }

    return prod;
}

Queue.prototype.peek = function () { 
    return this._head; 

} 

Queue.prototype.count = function () {
    return this._tail - this._head;
}

Queue.prototype.contains = function (val) {
    for (var i = this._head; i < this._tail; i++ ) {
        if(this._storage[i] === val) {
            return true;
        }
    }
    return false;
}





