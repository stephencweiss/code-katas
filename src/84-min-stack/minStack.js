/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)

    if(x <= this.min[this.min.length - 1] || this.min.length == 0) {
        this.min.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(!this.stack.length) return
    x = this.stack.pop()
    if(x == this.min[this.min.length - 1]){
        this.min.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.stack.length) return
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(!this.stack.length) return
    return this.min[this.min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 const minStack = new MinStack()
 minStack.push(0)
 minStack.push(1)
 minStack.push(0)
 minStack.getMin()
 minStack.pop()
 minStack.getMin()