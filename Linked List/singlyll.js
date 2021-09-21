class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CreateLL{
    constructor(){
        this.n  = new Node(-1)
    }
    insert(data){
        let end = new Node(data);
        let current = this.n;
        // console.log(current)
        while(current.next != null){
            current = current.next;
        }

        current.next = end;
        

    }
    display(){
        let current = this.n;
        current = current.next
        while(current != null){
            console.log(current.data)
            current = current.next
        }
        
    }
}


const ll = new CreateLL();
for(let i =0;i<7;i++)
    ll.insert(i)

ll.display()


