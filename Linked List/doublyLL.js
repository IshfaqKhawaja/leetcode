class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null
    }
}

class CreateDLL{
    constructor(){
        this.root = new Node(-1);
        this.end = null
    }
    insert(data){
        let current = this.root;
        let node  = new Node(data)
        while(current.next !== null){
            current = current.next;

        }
        current.next = node;
        node.prev = current;
        this.end = node

    }
    display(){
        let current = this.root
        while(current != null){
            // console.log(current)
            console.log(current.data)
            current = current.next
        }

        console.log("\n\n")
        current = this.end
         while(current != null){
            // console.log(current)
            console.log(current.data)
            current = current.prev
        }
    }
}


const dll = new CreateDLL()

for(let i=0;i<5;i++){
    dll.insert(i)
}


dll.display()