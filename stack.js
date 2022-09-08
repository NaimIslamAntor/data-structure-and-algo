class Stack {

    constructor(){
        this.items = []
    }


    /**
     * 
     * @param {any} element 
     */

    push(element){
        this.items.push(element)
    }

    pop(){
        if (this.isEmpty()) {
            return 'Underflow'
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    printStack(){
        let str = ''

        this.items.forEach(item => {
            str += `${item} `
        })

        return str
    }
}


const s = new Stack()

s.push('hi')
s.push('hello')
s.push('bye')
s.push('tres')

console.log(`peek the ${s.peek()}`);
console.log(s.pop());
console.log(s.pop());
console.log(s.printStack())

console.log(s.isEmpty());
