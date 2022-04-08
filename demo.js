
function OrderedLinkedList() {
    this._length = 0;
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

OrderedLinkedList.prototype.mayor = function() {
    var current = this.head
    // si la lista esta vacia
    if (current == null) return null
    // si la lista tiene un solo nodo
    if (current.next == null) return current.value;
    //si la lista tiene mas de un nodo
    var may = current.value;
    while (current.next !== null) {
        if (may > current.next.value){        
        } else {
            may = current.next.value
        }
        current = current.next 
    }
    return mayor
}
OrderedLinkedList.prototype.add = function(val){
    var current = this.head
    var node = new Node(val)
    if (current === null) {
        this.head = node 

    } // si no hay nodos en la lista
    else {      
        if (current.value < val) {// Cuando el valor del nuevo nodo es mayor que el primer nodo
            node.next = current
            current = node

        } else {
            if (current.next != null) {
                while(current.next.value > val) {
                    current = current.next;
                }
                node.next = current.next
                current.next = node

            } else {
                current.next = node

            }
        }    
    }
}    

var l1 = new OrderedLinkedList()
console.log(l1.mayor)
