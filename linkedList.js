  

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}




class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }


    add(element){
        const node = new Node(element)

        let currentNode = this.head

        if (this.head === null) {
            this.head = node
        }else{

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        this.size++
    }


    insertAt(element, index){

        if (index < 0 || index > this.size) {
            return 'Please provide a valid number'
        }else{
            const node = new Node(element)

            let curr, prov

            if (index === 0) {
                node.next = this.head

                this.head = node
            }else{
                curr = this.head
                const it = 0


                while (it < index) {
                    it++

                    prev = curr
                    curr = curr.next
                }

                node.next = curr

                prev.next = node

               
            }

            this.size++
        }
    }
}