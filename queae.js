class Queae{
    constructor(){
        this.items = []
    }


    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()


    /**
     * 
     * @param {any} element 
     */

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){

        if (this.isEmpty()) {
            return 'underflow'
        }

        this.items.shift()
    }


    front(){
        if (this.isEmpty()) {
            return 'No elements in Queae'
        }

        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }

    printQueue(){
        let allItems = ''

        this.items.forEach(element => {
            allItems += `${element} `
        })

        return allItems
    }
}


const q = new Queae()

q.enqueue('hi')

q.enqueue('tres')

q.enqueue('bye')

console.log(q.front());


console.log(q.printQueue())

console.log(q.isEmpty());
q.dequeue()
console.log(q.front());
q.dequeue()

console.log(q.items)