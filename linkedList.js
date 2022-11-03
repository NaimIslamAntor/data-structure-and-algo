  


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


    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList


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
            return console.log('Please enter a valid index');
        }else{
            const node = new Node(element)
            let currentNode
            let prevNode

            if (index === 0) {
                node.next = this.head
                this.head = node
            }else{
                currentNode = this.head
                let iteratore = 0

                while(index > iteratore){
                    iteratore++
                    prevNode = currentNode
                    currentNode = currentNode.next
                }

                // console.log(prevNode);
                // console.log(currentNode);

                node.next = currentNode
                prevNode.next = node
            }

            this.size++
        }
    }


    removeFrom(index){
        if (index < 0 || index >= this.size) {
            return console.log('Please enter a valid index');
        }else{
            let currentNode = this.head
            let prevNode
            let iteratore = 0

            if (index === 0) {
                this.head = currentNode.next
            }else{

                while(index > iteratore){
                    iteratore++
                    prevNode = currentNode
                    currentNode = currentNode.next
                }

                console.log(prevNode);
                console.log(currentNode);

                prevNode.next = currentNode.next

            }
            this.size--
        }
    }


  }


  const l = new LinkedList()

  l.add('hi')
  l.add('bye')


  l.add('thy')
  l.add('tres')
  l.add('woo')

//   l.insertAt('ok ok', 2)

  l.removeFrom(2)


  console.log(l.head);
  console.log(l.size);


